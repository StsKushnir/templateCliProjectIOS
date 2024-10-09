import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { NavigationProps } from "../../types/NavigationTypes";
import TopButtonsBar from "../TopButtonsBar/TopButtonsBar";
import { s } from "./FavoritesScreen.styles";
import useStore from "../../store/useStore";
import { burgersData } from "../../constants/burgersData";
import { Burger } from "../../types/BurgerType";
import StarIcon from "../../assets/icons/additional-Icons/StarIcon";
import LikeIcon from "../../assets/icons/additional-Icons/LikeIcon";
import { handleOrderPrice } from "../../utils/handleOrderPrice";

const FavoritesScreen: React.FC<NavigationProps> = ({ navigation, route }) => {
  const { setProduct, favorites, setFavorites, setOrderPrice } = useStore();

  const favoriteList = burgersData.filter((burger) =>
    favorites.includes(burger.name)
  );

  const handleLike = (burgerName: string) => {
    setFavorites(burgerName);
  };

  const handleSelectProduct = (burger: Burger) => {
    setProduct(burger);
    navigation.replace("Product", { previousScreen: "Favorites" });
  };

  let price = 0;

  return (
    <View style={s.container}>
      <View style={s.topBarBtns}>
        <TopButtonsBar navigation={navigation} route={route} />
      </View>
      <ScrollView style={s.favoritesWrap}>
        {favoriteList.length === 0 ? (
          <View style={s.noBurgersWrap}>
            <Text style={s.emptyMessage}>Nothing is selected yet</Text>
            <View style={s.nobBurgersImageWrap}>
              <Image
                source={require("../../assets/icons/burgers-images/noBurgers.png")}
                style={s.nobBurgersImage}
                resizeMode="contain"
              />
            </View>
          </View>
        ) : (
          <>
            <Text style={s.favoritesTitle}>Your favorite burgers</Text>
            <View style={s.favoritesListWrap}>
              {favoriteList.map((burger) => {
                const isLiked = favorites.includes(burger.name);
                price += burger.price;
                return (
                  <TouchableOpacity
                    key={burger.id}
                    style={s.burgerItem}
                    onPress={() => handleSelectProduct(burger)}
                  >
                    <Image
                      source={burger.icon}
                      style={s.burgerImage}
                      resizeMode="contain"
                    />
                    <View style={s.infoWrap}>
                      <Text style={s.burgerType}>{burger.type}</Text>
                      <Text style={s.burgerName}>{burger.name}</Text>
                      <Text style={s.burgerPrice}>Price: ${burger.price}</Text>
                    </View>
                    <View style={s.burgerRight}>
                      <View style={s.burgerRatingWrap}>
                        <StarIcon />
                        <Text>{burger.rating}</Text>
                      </View>
                      <TouchableOpacity
                        style={s.burgerLikeWrap}
                        onPress={() => handleLike(burger.name)}
                      >
                        <LikeIcon
                          fill={isLiked ? "#EF2A39" : "#3C2F2F"}
                          backgroundColor={isLiked ? "#EF2A39" : "#FFFFFF"}
                        />
                      </TouchableOpacity>
                    </View>
                  </TouchableOpacity>
                );
              })}
              <View style={{ height: 10 }}></View>
            </View>
          </>
        )}
      </ScrollView>
      <View style={s.orderAll}>
        <View style={s.totalPriceWrap}>
          <Text style={s.Title}>Total price</Text>
          <View style={s.priceWrap}>
            <Text style={s.Symbol}>$</Text>
            <Text style={s.Amount}>{price.toFixed(2)}</Text>
          </View>
        </View>
        <TouchableOpacity
          style={[
            s.orderBtn,
            favoriteList.length === 0 ? s.disabledButton : null,
          ]}
          onPress={() =>
            favoriteList.length > 0 &&
            handleOrderPrice(
              Number(price),
              navigation,
              setOrderPrice,
              "Favorites"
            )
          }
          disabled={favoriteList.length === 0}
        >
          <Text style={s.orderBtnText}>ORDER ALL</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FavoritesScreen;

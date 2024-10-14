import React from "react";
import { View, TouchableOpacity, Image, Text, ScrollView } from "react-native";
import { s } from "./BurgersList.styles";
import { burgersData } from "../../../constants/burgersData";
import StarIcon from "../../../assets/icons/additional-Icons/StarIcon";
import LikeIcon from "../../../assets/icons/additional-Icons/LikeIcon";
import { NavigationProps } from "../../../types/NavigationTypes";
import useStore from "../../../store/useStore";
import { Burger } from "../../../types/BurgerType";

const BurgersList: React.FC<NavigationProps> = ({ navigation }) => {
  const {
    setProduct,
    favorites,
    setFavorites,
    selectedCategory,
    searchBurger,
    sortCategory
  } = useStore();

  const handleLike = (burgerName: string) => {
    setFavorites(burgerName);
  };

  const handleSelectProduct = (burger: Burger) => {
    setProduct(burger);
    navigation.replace("Product");
  };

  const filterBurgers = () => {
    return burgersData
      .filter(
        (burger) =>
          selectedCategory === "All" || burger.category === selectedCategory
      )
      .filter(
        (burger) =>
          burger.name.toLowerCase().includes(searchBurger.toLowerCase()) ||
          burger.type.toLowerCase().includes(searchBurger.toLowerCase())
      )
      .sort((a, b) => {
        if (sortCategory === "higher") {
          return b.rating - a.rating;
        }
        if (sortCategory === "lower") {
          return a.rating - b.rating;
        }
  
        if (sortCategory === "expensive") {
          return b.price - a.price;
        }
        if (sortCategory === "cheaper") {
          return a.price - b.price;
        }
        return 0;
      });
  };
  

  const filteredBurgers = filterBurgers();

  return (
    <View style={s.container}>
      <ScrollView contentContainerStyle={s.scrollcontainer}>
        <View style={s.listWrap}>
          {filteredBurgers.length > 0 ? (
            filteredBurgers.map((burger) => {
              const isLiked = favorites.includes(burger.name);
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
                  <Text style={s.burgerType}>{burger.type}</Text>
                  <Text style={s.burgerName}>{burger.name}</Text>
                  <View style={s.burgerBottom}>
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
            })
          ) : (
            <View style={s.noResultsWrap}>
              <Text style={s.noResultsText}>No burgers found</Text>
              <View style={s.nobBurgersImageWrap}>
                <Image
                  source={require("../../../assets/icons/burgers-images/noBurgers.png")}
                  style={s.nobBurgersImage}
                  resizeMode="contain"
                />
              </View>
            </View>
          )}
          <View style={{ height: 10 }}></View>
        </View>
      </ScrollView>
    </View>
  );
};

export default BurgersList;

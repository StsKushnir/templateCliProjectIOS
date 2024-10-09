import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { s } from "./Ingredients.styles";
import { sideOptions, toppings } from "../../../constants/IngredientsData";
import AddIcon from "../../../assets/icons/additional-Icons/AddIcon";
import useStore from "../../../store/useStore";

const Ingredients = () => {
  const { setCustomBurgerPrice } = useStore();

  const handleCustomBurgerPrice = (price: number) => {
    setCustomBurgerPrice((prevPrice: number) => prevPrice + price);
  };
  return (
    <View style={s.ingredients}>
      <View style={s.toppings}>
        <Text style={s.ingredientsTitle}>Toppings</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={s.ingredientsWrap}>
            {toppings.map((topping) => (
              <TouchableOpacity
                key={topping.id}
                style={s.ingredientItem}
                onPress={() => handleCustomBurgerPrice(topping.price)}
              >
                <View style={s.imgWrap}>
                  <Image source={topping.image} style={s.ingredientImage} />
                </View>
                <View style={s.bottomWrap}>
                  <View style={s.titleWrap}>
                    <Text style={s.ingredientName}>{topping.name}</Text>
                    <AddIcon />
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
      <View style={s.sideOptions}>
        <Text style={s.ingredientsTitle}>Side options</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={s.ingredientsWrap}>
            {sideOptions.map((option) => (
              <TouchableOpacity
                key={option.id}
                style={s.ingredientItem}
                onPress={() => handleCustomBurgerPrice(option.price)}
              >
                <View style={s.imgWrap}>
                  <Image source={option.image} style={s.ingredientImage} />
                </View>
                <View style={s.bottomWrap}>
                  <View style={s.titleWrap}>
                    <Text style={s.ingredientName}>{option.name}</Text>
                    <AddIcon />
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Ingredients;

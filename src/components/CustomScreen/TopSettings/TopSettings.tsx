import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import { s } from "./TopSettings.styles";
import Slider from "@react-native-community/slider";
import useStore from "../../../store/useStore";



const TopSettings = () => {
  const { customBurgerAmount, setCustomBurgerAmount } = useStore();

  const handleIncreasePortion = () => {
    setCustomBurgerAmount(customBurgerAmount + 1); 
  };
  
  const handleDecreasePortion = () => {
    setCustomBurgerAmount(customBurgerAmount > 1 ? customBurgerAmount - 1 : customBurgerAmount); 
  };

  return (
        <View style={s.topSettings}>
          <Image
            source={require("../../../assets/icons/custom-images/custom-img.png")}
            style={s.customImg}
            resizeMode="contain"
          />
          <View style={s.topSettingsMain}>
            <Text style={s.titleBold}>
            Customize{' '}
              <Text style={s.titleRegular}>
                Your Burger to Your Tastes. Ultimate Experience
              </Text>
            </Text>
            <View style={s.orderSettings}>
        <View style={s.spicy}>
          <Text style={s.spicyTitle}>Spicy</Text>
          <Slider
            style={s.slider}
            minimumValue={0}
            maximumValue={1}
            minimumTrackTintColor="#EF2A39"
            maximumTrackTintColor="#e1e2e6"
            thumbTintColor="transparent"
            thumbImage={require("../../../assets/icons/additional-Icons/thumbSliderIcon.png")}
          />
          <View style={s.typesSpicy}>
            <Text style={s.mild}>Mild</Text>
            <Text style={s.hot}>Hot</Text>
          </View>
        </View>
        <View style={s.portionWrap}>
          <Text style={s.portionTitle}>Portion</Text>
          <View style={s.portionCounter}>
            <TouchableOpacity
              style={s.countBtnsWrap}
              onPress={handleDecreasePortion}
            >
              <Image
                source={require("../../../assets/icons/additional-Icons/minus-icon.png")}
                style={s.countImg}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <Text style={s.portionsAmount}>{customBurgerAmount}</Text>
            <TouchableOpacity
              style={s.countBtnsWrap}
              onPress={handleIncreasePortion}
            >
              <Image
                source={require("../../../assets/icons/additional-Icons/plus-icon.png")}
                style={s.countImg}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
          </View>
        </View>
  );
};

export default TopSettings;

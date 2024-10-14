import React from "react";
import { View, Text, TouchableOpacity, Image, ViewStyle } from "react-native";
import { s } from "./TopSettings.styles";
import useStore from "../../../store/useStore";
import SpicySlider from "../SpicySlider/SpicySlider";

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
          Customize{" "}
          <Text style={s.titleRegular}>
            Your Burger to Your Tastes. Ultimate Experience
          </Text>
        </Text>
        <View style={s.orderSettings}>
        <SpicySlider />
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

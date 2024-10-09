import React from "react";
import { View } from "react-native";
import { s } from "./CustomScreen.styles";
import { NavigationProps } from "../../types/NavigationTypes";
import TopSettings from "./TopSettings/TopSettings";
import Ingredients from "./Ingredients/Ingredients";
import CustomOrderInfo from "./CustomOrderInfo/CustomOrderInfo";
import TopButtonsBar from "../TopButtonsBar/TopButtonsBar";

const CustomScreen: React.FC<NavigationProps> = ({ navigation, route }) => {
  return (
    <View style={s.container}>
      <View style={s.topBarBtns}>
        <TopButtonsBar navigation={navigation} route={route} />
      </View>
      <View style={s.customWrap}>
        <TopSettings />
        <Ingredients />
        <CustomOrderInfo navigation={navigation} route={route} />
      </View>
    </View>
  );
};

export default CustomScreen;

import React from "react";
import { View, TouchableOpacity } from "react-native";
import { NavigationProps } from "../../../types/NavigationTypes";
import { ms } from "react-native-size-matters";
import GoBackIcon from "../../../assets/icons/additional-Icons/GoBackIcon";
import { StyleSheet } from "react-native";
import SupportMenuIcon from "../../../assets/icons/additional-Icons/SupportMenuIcon";

const TopButtonsBarSupport: React.FC<NavigationProps> = ({ navigation, route }) => {
  return (
    <View style={s.topBtnsWrap}>
      <TouchableOpacity onPress={() => navigation.replace("Main")}>
        <GoBackIcon width={ms(28)} height={ms(28)} />
      </TouchableOpacity>
      <TouchableOpacity>
        <SupportMenuIcon width={ms(20)} height={ms(9)} />
      </TouchableOpacity>
    </View>
  );
};

export default TopButtonsBarSupport;

const s = StyleSheet.create({
  topBtnsWrap: {
    width: "100%",
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    top: 60,
    zIndex: 1,
  },
});

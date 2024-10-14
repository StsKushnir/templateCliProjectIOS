import React from "react";
import { View, TouchableOpacity } from "react-native";
import { ms } from "react-native-size-matters";
import GoBackIcon from "../../../assets/icons/additional-Icons/GoBackIcon";
import { StyleSheet } from "react-native";
import SettingsIcon from "../../../assets/icons/additional-Icons/SettingsIcon";
import { DrawerNavigation } from "../../../constants/navigations";

const TopBarButtonsProfile = () => {
  return (
    <View style={s.topButtons}>
      <TouchableOpacity
        style={s.goBack}
        onPress={() => DrawerNavigation.navigate("Drawer")}
      >
        <GoBackIcon width={ms(28)} height={ms(28)} fill="#ffffff" />
      </TouchableOpacity>
      <TouchableOpacity style={s.settings}>
        <SettingsIcon width={ms(24)} height={ms(24)} fill="#ffffff" />
      </TouchableOpacity>
    </View>
  );
};

export default TopBarButtonsProfile;

const s = StyleSheet.create({
  topButtons: {
    width: "100%",
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
    top: 60,
  },
  goBack: {
    left: 12,
  },
  settings: {
    right: 12,
  },
});

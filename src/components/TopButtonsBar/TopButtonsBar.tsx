import React from "react";
import { View, TouchableOpacity } from "react-native";
import { NavigationProps } from "../../types/NavigationTypes";
import { ms } from "react-native-size-matters";
import GoBackIcon from "../../assets/icons/additional-Icons/GoBackIcon";
import { StyleSheet } from "react-native";
import SearchIcon from "../../assets/icons/additional-Icons/SearchIcon";

const TopButtonsBar: React.FC<NavigationProps> = ({ navigation, route }) => {
  const previousScreen = route.params?.previousScreen || 'Main'; 

  return (
    <View style={s.topBtnsWrap}>
      <TouchableOpacity onPress={() => navigation.replace(previousScreen)}>
        <GoBackIcon width={ms(28)} height={ms(28)} />
      </TouchableOpacity>
      <TouchableOpacity>
        <SearchIcon width={ms(20)} height={ms(20)} />
      </TouchableOpacity>
    </View>
  );
};

export default TopButtonsBar;

const s = StyleSheet.create({
  topBtnsWrap: {
    width: "100%",
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: 10,
    top: 60,
    zIndex: 1,
  },
});

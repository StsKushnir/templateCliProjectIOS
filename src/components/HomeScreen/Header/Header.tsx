import React from "react";
import { View, Text } from "react-native";
import { ms } from "react-native-size-matters";
import { s } from "./Header.styles";
import StartLogoIcon from "../../../assets/icons/startScreen-icons/StartLogoIcon";
import { AccountImage } from "../../../assets/icons/account-images/AccountImage";

const Header = () => {
  return (
    <View style={s.container}>
      <View style={s.logoWrap}>
        <StartLogoIcon width={ms(129)} height={ms(61)} fill="#000000" />
        <Text style={s.description}>Order your favourite food!</Text>
      </View>
      <View style={s.accountImgWrap}>
        <AccountImage width={ms(75)} height={ms(75)} resizeMode="contain" />
      </View>
    </View>
  );
};

export default Header;

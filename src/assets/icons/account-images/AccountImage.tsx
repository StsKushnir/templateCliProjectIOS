import React from "react";
import { Image, ImageStyle, StyleProp } from "react-native";
import { MyImageComponentProps } from "../../../types/AccountImgType";

export const AccountImage: React.FC<MyImageComponentProps> = ({
  width,
  height,
  style,
  resizeMode = 'cover', 
}) => {
  return (
    <Image
      source={require('../account-images/account-img.jpg')}
      style={[{ width, height}, style as StyleProp<ImageStyle>]} 
      resizeMode={resizeMode}
    />
  );
};

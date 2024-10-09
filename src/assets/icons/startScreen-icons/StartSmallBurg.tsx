import React from "react";
import { Image, ImageStyle, StyleProp} from "react-native";
import { MyImageComponentProps } from "../../../types/AccountImgType";

export const StartSmallBurg: React.FC<MyImageComponentProps> = ({
  width ,
  height ,
  style,
}) => {
  return (
    <Image
      source={require('../startScreen-icons/start-burg-2.png')}
      style={[{ width, height }, style as StyleProp<ImageStyle>]}
      resizeMode="contain" 
    />
  );
};


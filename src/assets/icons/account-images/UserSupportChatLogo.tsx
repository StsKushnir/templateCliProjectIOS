import React from "react";
import { Image, ImageStyle, StyleProp, View  } from "react-native";
import { MyImageComponentProps } from "../../../types/AccountImgType";

export const UserSupportChatLogo: React.FC<MyImageComponentProps> = ({
  width=50,
  height=50,
  style,
  resizeMode = 'cover', 
}) => {
  return (
    <View style={{
      width: 50,
      height: 50,
      borderWidth: 2,
      borderColor: '#EF2A39',
      borderRadius: 100,
      overflow: 'hidden',
    }}>
    <Image
      source={require('../account-images/account-img.jpg')}
      style={[{ width, height}, style as StyleProp<ImageStyle>]} 
      resizeMode={resizeMode}
    />
    </View>
  );
};

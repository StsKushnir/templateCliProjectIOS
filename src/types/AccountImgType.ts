import { StyleProp } from "react-native";
import { ImageStyle } from "react-native-size-matters";

export interface MyImageComponentProps {
  width?: number;
  height?: number;
  style?: StyleProp<ImageStyle>;
  resizeMode?: 'cover' | 'contain' | 'stretch' | 'center' | 'repeat';
}
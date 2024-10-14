import { DrawerNavigationProp } from "@react-navigation/drawer";
import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type NavigationProps = {
  navigation: NativeStackNavigationProp<any>;
  route: RouteProp<any, any>;
};

export type DrawerNavProp = DrawerNavigationProp<any, any>; 
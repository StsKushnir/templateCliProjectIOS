import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import StartScreen from "../components/StartScreen/StartScreen";
import HomeScreen from "../components/HomeScreen/HomeScreen";
import CustomScreen from "../components/CustomScreen/CustomScreen";
import SupportScreen from "../components/SupportScreen/SupportScreen";
import FavoritesScreen from "../components/FavoritesScreen/FavoritesScreen";
import ProfileScreen from "../components/ProfileScreen/ProfileScreen";
import ProductCard from "../components/ProductCard/ProductCard";
import PaymentScreen from "../components/PaymentScreen/PaymentScreen";
import MainTabNavigator from "./MainTabNavigator";
import SettingsScreen from "../components/SettingsScreen/SortingScreen";

const Drawer = createDrawerNavigator();

const MyDrawerNavigator = () => (
  <Drawer.Navigator
    screenOptions={{
      headerShown: false,
      drawerPosition: "right",
      drawerStyle: {
        width: "50%",
      },
    }}
    initialRouteName="Main"
    drawerContent={() => <SettingsScreen />}
  >
    <Drawer.Screen name="Main" component={MainTabNavigator} />
  </Drawer.Navigator>
);

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Start" component={StartScreen} />
        <Stack.Screen
          name="Drawer"
          component={MyDrawerNavigator}
          options={{ animation: "slide_from_right" }}
        />
        <Stack.Screen name="Home" component={HomeScreen} />

        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ animation: "slide_from_left" }}
        />
        <Stack.Screen
          name="Custom"
          component={CustomScreen}
          options={{ animation: "slide_from_right" }}
        />
        <Stack.Screen
          name="Support"
          component={SupportScreen}
          options={{ animation: "slide_from_left" }}
        />
        <Stack.Screen
          name="Favorites"
          component={FavoritesScreen}
          options={{ animation: "slide_from_left" }}
        />
        <Stack.Screen
          name="Product"
          component={ProductCard}
          options={{ animation: "slide_from_left" }}
        />
        <Stack.Screen
          name="Payment"
          component={PaymentScreen}
          options={{ animation: "slide_from_left" }}
        />
      </Stack.Navigator>
    </GestureHandlerRootView>
  );
};

export default AppNavigator;

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import StartScreen from "../components/StartScreen/StartScreen";
import HomeScreen from "../components/HomeScreen/HomeScreen";
import CustomScreen from "../components/CustomScreen/CustomScreen";
import SupportScreen from "../components/SupportScreen/SupportScreen";
import FavoritesScreen from "../components/FavoritesScreen/FavoritesScreen";
import MainTabNavigator from "./MainTabNavigator";
import ProfileScreen from "../components/ProfileScreen/ProfileScreen";
import ProductCard from "../components/ProductCard/ProductCard";
import PaymentScreen from "../components/PaymentScreen/PaymentScreen";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer independent={true}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen
            name="Start"
            component={StartScreen}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
          />
          <Stack.Screen
            name="Profile"
            component={ProfileScreen}
            options={{ animation: "slide_from_right" }}
          />
          <Stack.Screen
            name="Custom"
            component={CustomScreen}
            options={{ animation: "slide_from_right" }}
          />
          <Stack.Screen
            name="Support"
            component={SupportScreen}
            options={{ animation: "slide_from_right" }}
          />
          <Stack.Screen
            name="Favorites"
            component={FavoritesScreen}
            options={{ animation: "slide_from_left" }}
          />
          <Stack.Screen
            name="Product"
            component={ProductCard}
            options={{ animation: "slide_from_right" }}
          />
          <Stack.Screen
            name="Payment"
            component={PaymentScreen}
            options={{ animation: "slide_from_left" }}
          />
          <Stack.Screen
            name="Main"
            component={MainTabNavigator}
            options={{ animation: "slide_from_left" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default AppNavigator;

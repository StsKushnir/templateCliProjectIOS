import React from "react";
import { View } from "react-native";
import { s } from "./HomeScreen.styles"; 
import { NavigationProps } from "../../types/NavigationTypes";  
import Header from "./Header/Header";  
import Search from "./Search/Search";
import Filters from "./Filters/Filters";
import BurgersList from "./BurgersList/BurgersList";

const HomeScreen: React.FC<NavigationProps> = ({ navigation, route }) => {
  return (
    <View style={s.container}>
      <View style={s.homeWrap}>
        <Header />
        <Search />
        <Filters />
        <BurgersList navigation={navigation} route={route} />
      </View>
    </View>
  );
};

export default HomeScreen;

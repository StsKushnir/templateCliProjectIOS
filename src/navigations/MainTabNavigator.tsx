import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TouchableOpacity, View } from "react-native";
import { s } from "./MainTabNavigator.styles";
import { TAB_CONFIG } from "../constants/TabConfig";
import { NavigationProps } from "../types/NavigationTypes";
import { SCREEN_NAMES } from "../types/ScreenNames";
import { TabBarImg } from "../assets/icons/tab-icons/TabBarImg";
import useStore from "../store/useStore";

const Tab = createBottomTabNavigator();

const MainTabNavigator: React.FC<NavigationProps> = ({ navigation }) => {
  const { favorites } = useStore();

  const FAVORITES_TAB_COLOR = "#EF2A39";
  const FAVORITES_ICON_COLOR = "#FFFFFF";

  const renderTabBarIcon = (tab: typeof TAB_CONFIG[0], focused: boolean, isFavoritesTab: boolean) => (
    <View style={tab.name === SCREEN_NAMES.CUSTOM ? s.customTabContainer : s.iconContainer}>
      <tab.icon
        width={24}
        height={24}
        backgroundColor={isFavoritesTab && favorites.length > 0 ? FAVORITES_ICON_COLOR : FAVORITES_TAB_COLOR}
      />
      {tab.name === SCREEN_NAMES.HOME && focused && <View style={s.homeAfter} />}
    </View>
  );

  const handleTabPress = (tab: typeof TAB_CONFIG[0]) => {
    if (tab.name === SCREEN_NAMES.CUSTOM) {
      navigation.replace(tab.name); 
    } else if (tab.name !== SCREEN_NAMES.HOME) {
      navigation.replace(tab.name);
    }
  };

  return (
    <View style={s.container}>
      <View style={s.navigatorWrap}>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {
              backgroundColor: "transparent",
              height: 70,
              bottom: 0,
            },
          }}
        >
          {TAB_CONFIG.map((tab) => {
            const isFavoritesTab = tab.name === SCREEN_NAMES.FAVORITES;

            return (
              <Tab.Screen
                key={tab.name}
                name={tab.name}
                component={tab.component}
                options={{
                  tabBarIcon: ({ focused }) => renderTabBarIcon(tab, focused, isFavoritesTab),
                  tabBarButton: (props) => (
                    <TouchableOpacity
                      {...props}
                      onPress={() => handleTabPress(tab)}
                    />
                  ),
                }}
              />
            );
          })}
        </Tab.Navigator>
      </View>
      <View style={s.tabBarImgWrap}>
        <TabBarImg />
      </View>
    </View>
  );
};

export default MainTabNavigator;

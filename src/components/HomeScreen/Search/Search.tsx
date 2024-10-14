import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import SearchIcon from "../../../assets/icons/additional-Icons/SearchIcon";
import SettingsSlidersIcon from "../../../assets/icons/additional-Icons/SettingsSlidersIcon";
import { s } from "./Search.styles";
import { DrawerNavProp } from "../../../types/NavigationTypes";
import useStore from "../../../store/useStore";

const SearchComponent = () => {
  const { searchBurger, setSearchBurger } = useStore();
  const navigation = useNavigation<DrawerNavProp>();

  const handleSettingsPress = () => {
    navigation.openDrawer();
  };

  const handleSearchChange = (text: string) => {
    setSearchBurger(text);  
  };

  return (
    <KeyboardAvoidingView
      style={s.container}
      behavior="padding"
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={s.inputWrap}>
          <SearchIcon width={24} height={24} />
          <TextInput
            style={s.searchInput}
            placeholder="Search"
            placeholderTextColor="#3C2F2F"
            autoCapitalize="none"
            keyboardType="default"
            value={searchBurger}  
            onChangeText={handleSearchChange}  
          />
        </View>
      </TouchableWithoutFeedback>
      <TouchableOpacity style={s.settingsButton} onPress={handleSettingsPress}>
        <SettingsSlidersIcon />
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default SearchComponent;

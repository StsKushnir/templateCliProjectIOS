import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import Animated, { useAnimatedStyle, withTiming } from "react-native-reanimated";
import { s } from "./Search.styles";
import SearchIcon from "../../../assets/icons/additional-Icons/SearchIcon";
import SettingsSlidersIcon from "../../../assets/icons/additional-Icons/SettingsSlidersIcon";
import useStore from "../../../store/useStore";

const Search = () => {
  const { setSearchBurger, sortRating, sortPrice, setSortRating, setSortPrice } = useStore();
  const [dropMenuSorting, setDropMenuSorting] = useState<boolean>(false);

  const handleSearchChange = (value: string) => {
    setSearchBurger(value.trim());
  };

  const toggleDropMenu = () => {
    setDropMenuSorting(!dropMenuSorting);
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: withTiming(dropMenuSorting ? 0 : -320, { duration: 300 }) },
      ],
    };
  });

  return (
    <View style={s.container}>
      <View style={s.inputContainer}>
        <SearchIcon width={24} height={24} />
        <TextInput
          style={s.searchInput}
          placeholder="Search"
          placeholderTextColor="#3C2F2F"
          autoCapitalize="none"
          keyboardType="default"
          onChangeText={handleSearchChange}
        />
      </View>

      <TouchableOpacity style={s.settingsButton} onPress={toggleDropMenu}>
        <SettingsSlidersIcon />
      </TouchableOpacity>
{/* 
      <Animated.View style={[s.dropMenu, animatedStyle]}>
        <Text style={s.dropMenuTitle}>Sorting by:</Text>
        <View style={s.menuWrap}>
          <View style={s.sortRatingWrap}>
            <Text style={s.typeRating}>Rating</Text>
            <TouchableOpacity style={s.sortingWrap} onPress={() => setSortRating('higher')}>
              <View style={s.sortingCheckBox}>
                <View
                  style={[
                    s.sortingCheckBoxPoint,
                    sortRating === 'higher' && { backgroundColor: '#EF2A39' },
                  ]}
                ></View>
              </View>
              <Text>Higher first</Text>
            </TouchableOpacity>
            <TouchableOpacity style={s.sortingWrap} onPress={() => setSortRating('lower')}>
              <View style={s.sortingCheckBox}>
                <View
                  style={[
                    s.sortingCheckBoxPoint,
                    sortRating === 'lower' && { backgroundColor: '#EF2A39' },
                  ]}
                ></View>
              </View>
              <Text>Lower first</Text>
            </TouchableOpacity>
          </View>
          <View style={s.sortRatingWrap}>
            <Text style={s.typeRating}>Price</Text>
            <TouchableOpacity style={s.sortingWrap} onPress={() => setSortPrice('expensive')}>
              <View style={s.sortingCheckBox}>
                <View
                  style={[
                    s.sortingCheckBoxPoint,
                    sortPrice === 'expensive' && { backgroundColor: '#EF2A39' },
                  ]}
                ></View>
              </View>
              <Text>Expensive first</Text>
            </TouchableOpacity>
            <TouchableOpacity style={s.sortingWrap} onPress={() => setSortPrice('cheaper')}>
              <View style={s.sortingCheckBox}>
                <View
                  style={[
                    s.sortingCheckBoxPoint,
                    sortPrice === 'cheaper' && { backgroundColor: '#EF2A39' },
                  ]}
                ></View>
              </View>
              <Text>Cheaper first</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Animated.View> */}
    </View>
  );
};

export default Search;

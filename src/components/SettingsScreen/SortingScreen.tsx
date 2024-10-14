import * as React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { s } from "./SettingsScreen.styles";
import useStore from "../../store/useStore";
import { sortingOptions } from "../../constants/sortingOptions";

const SettingsScreen = () => {
  const { sortCategory, setSortCategory } = useStore();

  const handleSortCategoryPress = (value: string) => {
    setSortCategory(sortCategory === value ? "" : value);
  };

  return (
    <View style={s.container}>
      <Text style={s.dropMenuTitle}>Sorting by:</Text>
      <View style={s.menuWrap}>
        {sortingOptions.map((sortGroup) => (
          <View key={sortGroup.category} style={s.sortCategoryWrap}>
            <Text style={s.typeCategoryTitle}>{sortGroup.category}</Text>
            {sortGroup.options.map((option) => (
              <TouchableOpacity
                key={option.value}
                style={s.sortingWrap}
                onPress={() => handleSortCategoryPress(option.value)}
              >
                <View style={s.sortingCheckBox}>
                  <View
                    style={[
                      s.sortingCheckBoxPoint,
                      sortCategory === option.value && {
                        backgroundColor: "#EF2A39",
                      },
                    ]}
                  />
                </View>
                <Text style={s.sortTypeName}>{option.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
};

export default SettingsScreen;

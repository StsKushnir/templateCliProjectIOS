import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { s } from "./Filters.styles";
import { data } from "../../../constants/filtersData"; 
import useStore from "../../../store/useStore";

const Filters = () => {
  const {selectedCategory, setSelectedCategory} = useStore();
  
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={s.container}>
        <View style={s.filtersWrap}>
          {data.map((item) => (
            <TouchableOpacity
              key={item}
              style={[
                s.categoryButton,
                selectedCategory === item && {
                  backgroundColor: "#EF2A39",
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 10 },
                  shadowOpacity: 0.25,
                  shadowRadius: 18,
                },
              ]}
              onPress={() => setSelectedCategory(item)}
            >
              <Text
                style={[
                  s.categoryText,
                  selectedCategory === item && { color: "#FFFFFF" },
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default Filters;

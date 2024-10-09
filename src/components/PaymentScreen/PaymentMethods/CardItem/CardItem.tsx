import React from "react";
import { View, Text, TouchableOpacity, Image, Animated } from "react-native";
import { s } from "./CardItem.styles";

interface CardItemProps {
  card: {
    id: number;
    type: string;
    image: any;
    number: number;
  };
  isSelected: boolean;
  onPress: () => void;
  shadowOpacity: Animated.Value; 
}

const CardItem: React.FC<CardItemProps> = ({ card, isSelected, onPress, shadowOpacity }) => {
  return (
    <TouchableOpacity
      key={card.id}
      style={[
        s.cardItem,
        card.type === "Credit" ? s.creditStyle : s.debitStyle,
        isSelected && s.selectedShadow,
        {
          shadowOpacity: shadowOpacity,
          shadowColor: '#EF2A39',
          shadowOffset: { width: 0, height: 7 },
          shadowRadius: 13,
          elevation: 13,
        },
      ]}
      onPress={onPress}
    >
      <View style={card.type === "Credit" ? s.creditImgStyle : s.debitImgStyle}>
        <Image source={card.image} style={s.cardImage} resizeMode="contain" />
      </View>
      <View style={s.cardData}>
        <Text
          style={[
            s.cardTypeName,
            card.type === "Credit" ? s.creditNameStyle : s.debitNameStyle,
          ]}
        >
          {card.type} card
        </Text>
        <View style={s.cardNumberWrap}>
          <Text style={s.cardNumberStyle}>
            {String(card.number).slice(0, 4)}{" "}
          </Text>
          <Text style={s.cardNumberStyle}>**** ****</Text>
          <Text style={s.cardNumberStyle}> {String(card.number).slice(-4)}</Text>
        </View>
      </View>
      <View
        style={[
          s.checkPoint,
          { borderColor: card.type === "Credit" ? "#FFFFFF" : "#3C2F2F" },
        ]}
      >
        {isSelected && (
          <View
            style={[
              s.pointBody,
              card.type === "Credit" ? s.creditCheckPointStyle : s.debitCheckPointStyle,
            ]}
          ></View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default CardItem;

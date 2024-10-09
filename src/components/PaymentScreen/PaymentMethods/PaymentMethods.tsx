import React, { FC, useState, useEffect, useRef } from "react";
import { View, Text, TouchableOpacity, Animated } from "react-native";
import { s } from "./PaymentMethods.styles";
import { Cards } from "../../../constants/paymentCardsData";
import CheckMarkIcon from "../../../assets/icons/additional-Icons/CheckMarkIcon";
import CardItem from "./CardItem/CardItem"; 
import PopupMessage from "../../PopupMessage/PopupMessage"; 
import { NavigationProps } from "../../../types/NavigationTypes";

interface PaymentMethodsProps {
  totalPrice: number; 
  navigation: NavigationProps["navigation"];
}

const PaymentMethods: FC<PaymentMethodsProps> = ({ totalPrice, navigation }) => {
  const [selectedCardId, setSelectedCardId] = useState<number | null>(null);
  const [saveCardData, setSaveCardData] = useState<boolean>(false);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [highlightError, setHighlightError] = useState<boolean>(false);
  const shadowOpacity = useRef(new Animated.Value(0)).current; 

  const handlePayNow = () => {
    if (selectedCardId === null) {
      setHighlightError(true);
      shadowOpacity.setValue(0); 
      Animated.timing(shadowOpacity, {
        toValue: 1,
        duration: 300, 
        useNativeDriver: true,
      }).start(() => {
        setTimeout(() => {
          Animated.timing(shadowOpacity, {
            toValue: 0,
            duration: 300, 
            useNativeDriver: true,
          }).start();
        }, 300); 
      });
    } else {
      setModalVisible(true);
    }
};


  return (
    <View style={s.payMethodsWrap}>
      <Text style={s.mainTitle}>Payment methods</Text>
      <View style={s.cardsWrap}>
        {Cards.map((card) => (
          <CardItem
            key={card.id}
            card={card}
            isSelected={selectedCardId === card.id}
            onPress={() => setSelectedCardId(card.id)}
            shadowOpacity={shadowOpacity} 
          />
        ))}
      </View>
      <View style={s.saveInfo}>
        <TouchableOpacity
          onPress={() => setSaveCardData(!saveCardData)}
          style={[
            s.checkPointSaveData,
            { backgroundColor: saveCardData ? "#EF2A39" : "transparent" },
          ]}
        >
          {saveCardData && <CheckMarkIcon />}
        </TouchableOpacity>
        <Text style={s.saveCardDataText}>
          Save card details for future payments
        </Text>
      </View>
      <View style={s.finalyOrder}>
        <View style={s.totalPriceWrap}>
          <Text style={s.totalPriceTitle}>Total price</Text>
          <View style={s.priceTextWrap}>
            <Text style={s.priceSymbol}>$</Text>
            <Text style={s.priceText}>{totalPrice.toFixed(2)}</Text>
          </View>
        </View>
        <TouchableOpacity
          style={s.payButton}
          onPress={handlePayNow}
        >
          <Text style={s.payButtonText}>Pay Now</Text>
        </TouchableOpacity>
      </View>

      <PopupMessage
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        navigation={navigation}
      />
    </View>
  );
};

export default PaymentMethods;

import React, { useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { s } from "./CustomOrderInfo.styles";
import useStore from "../../../store/useStore";
import { NavigationProps } from "../../../types/NavigationTypes";
import { handleOrderPrice } from "../../../utils/handleOrderPrice";

const CustomOrderInfo: React.FC<NavigationProps> = ({ navigation, route }) =>{
  const { customBurgerAmount, customBurgerPrice, setOrderPrice } = useStore();
  const price = (customBurgerPrice * customBurgerAmount).toFixed(2);
  
  return (
    <View style={s.container}>
      <View style={s.totalPriceWrap}>
        <Text style={s.Title}>Total</Text>
        <View style={s.priceWrap}>
          <Text style={s.Symbol}>$</Text>
          <Text style={s.Amount}>{price}</Text>
        </View>
      </View>
      <TouchableOpacity
        style={s.orderBtn}
        onPress={() => handleOrderPrice(Number(price), navigation, setOrderPrice, 'Custom')}
      >
        <Text style={s.orderBtnText}>ORDER NOW</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomOrderInfo;
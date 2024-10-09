import React from "react";
import { View } from "react-native";
import { NavigationProps } from "../../types/NavigationTypes";
import TopButtonsBar from "../TopButtonsBar/TopButtonsBar";
import useStore from "../../store/useStore";
import Summary from "./Summary/Summary";
import { StyleSheet } from "react-native";
import PaymentMethods from "./PaymentMethods/PaymentMethods";

const TAXES = 0.3;
const DELIVERY_FEES = 1.5;

const PaymentScreen: React.FC<NavigationProps> = ({ navigation, route }) => {
  const { orderPrice } = useStore();

  const totalPrice = orderPrice + DELIVERY_FEES + TAXES;

  return (
    <View style={s.container}>
      <View style={s.topBarBtns}>
        <TopButtonsBar navigation={navigation} route={route} />
      </View>
      <View style={s.paymentWrap}>
      <Summary orderPrice={orderPrice} totalPrice={totalPrice}/>
      <PaymentMethods totalPrice={totalPrice} navigation={navigation}/>
      </View>
    </View>
  );
};

export default PaymentScreen;

const s = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 9,
    backgroundColor: "#FFFFFF",
    position: 'relative',
  },
  topBarBtns: {
    position: "relative",
  },
  paymentWrap: {
    paddingHorizontal: 10,
    marginTop: 100,
  },

});
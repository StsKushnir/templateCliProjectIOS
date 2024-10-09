import React, { FC } from "react";
import { View, Text} from "react-native";
import { s } from "./Summary.styles";

type Props = {
  orderPrice: number;
  totalPrice: number;
}

const Summary: FC<Props> = ({orderPrice, totalPrice}) => {

  return (
    <View style={s.summary}>
      <Text style={s.summaryTitle}>Order summary</Text>
      <View style={s.paymentInfo}>
        <View style={s.mainInfoWrap}>
          <View style={s.orderInfoWrap}>
            <Text style={s.infoText}>Order</Text>
            <Text style={s.infoText}>${orderPrice.toFixed(2)}</Text>
          </View>
          <View style={s.orderInfoWrap}>
            <Text style={s.infoText}>Taxes</Text>
            <Text style={s.infoText}>$0.3</Text>
          </View>
          <View style={s.orderInfoWrap}>
            <Text style={s.infoText}>Delivery fees</Text>
            <Text style={s.infoText}>$1.5</Text>
          </View>
        </View>
        <View style={s.totalPriceWrap}>
          <Text style={s.totalPriceText}>Total:</Text>
          <Text style={s.totalPriceText}>${totalPrice.toFixed(2)}</Text>
        </View>
        <View style={s.deliveryTimeWrap}>
          <Text style={s.deliveryTimeInfo}>Estimated delivery time:</Text>
          <Text style={s.deliveryTimeInfo}>15 - 30mins</Text>
        </View>
      </View>
    </View>
  );
};

export default Summary;

import React, { FC, useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { s } from "./ProductOrderInfo.styles";
import { Burger } from "../../../types/BurgerType";
import Slider from "@react-native-community/slider";
import { NavigationProps } from "../../../types/NavigationTypes";
import useStore from "../../../store/useStore";
import { handleOrderPrice } from "../../../utils/handleOrderPrice";

type Props = {
  product: Burger;
  navigation: NavigationProps['navigation'];
};

const ProductOrderInfo: FC<Props> = ({ navigation, product }) => {
  const { setOrderPrice } = useStore();
  const [portions, setPortions] = useState<number>(1);
  const price = product.price * portions;

  const handleIncreasePortion = () => {
    setPortions((prevPortions) => prevPortions + 1);
  };

  const handleDecreasePortion = () => {
    setPortions((prevPortions) =>
      prevPortions > 1 ? prevPortions - 1 : prevPortions
    );
  };

  return (
    <View style={s.orderWrap}>
      <View style={s.orderSettings}>
        <View style={s.spicy}>
          <Text style={s.spicyTitle}>Spicy</Text>
          <Slider
            style={s.slider}
            minimumValue={0}
            maximumValue={1}
            minimumTrackTintColor="#EF2A39"
            maximumTrackTintColor="#F3F4F6"
            thumbTintColor="transparent"
            thumbImage={require("../../../assets/icons/additional-Icons/thumbSliderIcon.png")}
          />
          <View style={s.typesSpicy}>
            <Text style={s.mild}>Mild</Text>
            <Text style={s.hot}>Hot</Text>
          </View>
        </View>
        <View style={s.portionWrap}>
          <Text style={s.portionTitle}>Portion</Text>
          <View style={s.portionCounter}>
            <TouchableOpacity
              style={s.countBtnsWrap}
              onPress={handleDecreasePortion}
            >
              <Image
                source={require("../../../assets/icons/additional-Icons/minus-icon.png")}
                style={s.countImg}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <Text style={s.portionsAmount}>{portions}</Text>
            <TouchableOpacity
              style={s.countBtnsWrap}
              onPress={handleIncreasePortion}
            >
              <Image
                source={require("../../../assets/icons/additional-Icons/plus-icon.png")}
                style={s.countImg}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={s.ordersButtons}>
        <View style={s.priceBtn}>
          <Text style={s.orderBtnText}>${price.toFixed(2)}</Text>
        </View>
        <TouchableOpacity
          style={s.orderBtn}
          onPress={() => handleOrderPrice(Number(price), navigation, setOrderPrice, 'Product')}
        >
          <Text style={s.orderBtnText}>ORDER NOW</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductOrderInfo;

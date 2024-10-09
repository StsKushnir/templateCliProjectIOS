import React from "react";
import { View } from "react-native";
import { s } from "./ProductCard.styles";
import { NavigationProps } from "../../types/NavigationTypes";
import useStore from "../../store/useStore";
import MainInfoProduct from "./MainInfoProduct/MainInfoProduct";
import ProductOrderInfo from "./ProductOrderInfo/ProductOrderInfo";
import TopButtonsBar from "../TopButtonsBar/TopButtonsBar";

const ProductCard: React.FC<NavigationProps> = ({ navigation, route }) => {
  const { product } = useStore();

  return (
    <View style={s.container}>
      <TopButtonsBar navigation={navigation} route={route} />
      <View style={s.productWrap}>
        <MainInfoProduct />
        {product && <ProductOrderInfo product={product} navigation={navigation}/>}
      </View>
    </View>
  );
};

export default ProductCard;

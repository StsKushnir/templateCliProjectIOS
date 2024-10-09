import React from "react";
import { View, Text, Image } from "react-native";
import { s } from "./MainInfoProduct.styles";
import useStore from "../../../store/useStore";
import StarIcon from "../../../assets/icons/additional-Icons/StarIcon";

const MainInfoProduct = () => {
  const { product } = useStore();
  return (
    <View style={s.mainWrap}>
      <View style={s.imgWrap}>
        <Image
          source={product?.icon}
          style={s.productImage}
          resizeMode="contain"
        />
      </View>
      <View style={s.productTitleWrap}>
        {product?.name !== "Fried Chicken Burger" && (
          <Text style={s.title}>{`${product?.type} ${""}`}</Text>
        )}
        <Text style={s.title}>{product?.name}</Text>
      </View>
      <View style={s.addInfo}>
        <StarIcon width={16} height={16} />
        <Text style={s.info}>
          {product?.rating} - {product?.cookingTime} mins
        </Text>
      </View>
      <Text style={s.description}>{product?.description}</Text>
    </View>
  );
};

export default MainInfoProduct;

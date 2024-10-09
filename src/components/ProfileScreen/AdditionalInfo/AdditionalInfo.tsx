import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { s } from "./AdditionalInfo.styles";
import SmallRight from "../../../assets/icons/additional-Icons/SmallRight";

const AdditionalInfo = () => {
  return (
    <View style={s.container}>
      <TouchableOpacity style={s.detailsWrap} >
        <Text style={s.detailsText}>Payment Details</Text>
        <SmallRight width={24} height={24} fill="#808080" />
      </TouchableOpacity>
      <TouchableOpacity style={s.detailsWrap} >
        <Text style={s.detailsText}>Order history</Text>
        <SmallRight width={24} height={24} fill="#808080" />
      </TouchableOpacity>
    </View>
  );
};

export default AdditionalInfo;

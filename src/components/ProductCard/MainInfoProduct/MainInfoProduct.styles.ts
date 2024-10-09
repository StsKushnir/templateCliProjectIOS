import { StyleSheet } from "react-native";
import { ms } from "react-native-size-matters";

export const s = StyleSheet.create({
  mainWrap: {
    
  },
  imgWrap: {
  alignItems: 'center'
  },
  productImage: {
    width: 330,
    height: 320,
  },
  productTitleWrap: {
    flexDirection: "row",
  },
  title: {
    fontFamily: "Roboto",
    fontWeight: "600",
    fontSize: ms(25),
    lineHeight: ms(34),
    color: "#3C2F2F",
    marginBottom: 9,
  },
  addInfo:{
    flexDirection: 'row',
    gap: 5,
    alignItems: 'flex-start',
    marginBottom: 19,
  },
  info:{
    fontFamily: 'Roboto',
    fontWeight: '500',
    fontSize: 15,
    lineHeight: 20,
    color: '#808080',
  },
  description: {
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 25,
    color: '#6A6A6A',
    height: 150,
  },
});

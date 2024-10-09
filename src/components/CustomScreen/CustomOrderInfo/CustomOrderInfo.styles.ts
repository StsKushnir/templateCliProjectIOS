import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 19,
    marginTop: 15,
  },
  totalPriceWrap: {},
  Title: {
    fontFamily: "Roboto",
    fontWeight: "600",
    fontSize: 18,
    lineHeight: 24,
    color: "#3C2F2F",
    marginBottom: 5,
  },
  priceWrap: {
    flexDirection: 'row',
  
  },
  Symbol: {
    fontFamily: "Roboto",
    fontWeight: "600",
    fontSize: 24,
    lineHeight: 32,
    color: "#EF2A39",
    marginTop: 13,
  },
  Amount: {
    fontFamily: "Roboto",
    fontWeight: "600",
    fontSize: 36,
    lineHeight: 48,
    color: "#3C2F2F",
  },

  orderBtnText: {
    fontFamily: "Roboto",
    fontWeight: "600",
    fontSize: 22,
    lineHeight: 30,
    color: "#FFFFFF",
  },
  orderBtn: {
    width: 200,
    height: 70,
    borderRadius: 20,
    borderColor: "#EF2A39",
    borderWidth: 1,
    backgroundColor: "#EF2A39",
    justifyContent: "center",
    alignItems: "center",
  },
});

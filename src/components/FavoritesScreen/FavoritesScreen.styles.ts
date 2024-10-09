import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 9,
    backgroundColor: "#FFFFFF",
    paddingBottom: 93,
  },
  topBarBtns: {
    position: "relative",
  },
  noBurgersWrap: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  nobBurgersImageWrap: {
    marginTop: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nobBurgersImage: {
    width: 250,
    height: 250,
  },
  favoritesWrap: {
    marginTop: 95,
    flex: 1,
  },
  favoritesTitle: {
    textAlign: "center",
    fontFamily: "Roboto",
    fontWeight: "600",
    fontSize: 30,
    lineHeight: 34,
    color: "#3C2F2F",
    marginBottom: 30,
  },
  favoritesListWrap: {
    flexDirection: "column",
    alignItems: "center",
    rowGap: 15,
  },
  burgerItem: {
    width: "95%",
    padding: 11,
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.19,
    shadowRadius: 6,
    borderRadius: 20,
  },
  burgerImage: {
    width: 100,
    height: 120,
  },
  infoWrap: {
    marginLeft: 10,
  },
  burgerType: {
    fontFamily: "Roboto",
    fontWeight: "600",
    lineHeight: 18.5,
    color: "#3C2F2F",
    marginBottom: 10,
  },
  burgerName: {
    marginTop: 3,
    fontFamily: "Roboto",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 18.5,
    color: "#3C2F2F",
    marginBottom: "auto",
  },
  burgerPrice: {
    fontFamily: "Roboto",
    fontWeight: "600",
    lineHeight: 18.5,
    color: "#3C2F2F",
    marginBottom: 10,
  },
  burgerRight: {
    marginLeft: "auto",
    paddingVertical: 10,
    marginRight: 5,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  burgerRatingWrap: {
    flexDirection: "row",
    gap: 5,
  },
  burgerLikeWrap: {},

  orderAll: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'space-between',
    paddingHorizontal: 19,
    marginTop: 20,
    position: 'absolute',
    bottom: 20,
  },
  totalPriceWrap: {
    paddingLeft: 15,
  },
  Title: {
    fontFamily: "Roboto",
    fontWeight: "600",
    fontSize: 18,
    lineHeight: 24,
    color: "#3C2F2F",
    marginBottom: 5,
  },
  priceWrap: {
    flexDirection: "row",
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
  
  disabledButton: {
    backgroundColor: "#D3D3D3", 
    borderColor: "#D3D3D3", 
  },
  emptyMessage: {
    textAlign: "center",
    fontFamily: "Roboto",
    fontWeight: "600",
    fontSize: 30,
    lineHeight: 34,
    color: "#3C2F2F",
  },
});

import { StyleSheet } from "react-native";

export const s = StyleSheet.create({

  summary: {
    flexDirection: 'column',
  },
  summaryTitle: {
    fontFamily: "Poppins",
    fontWeight: "600",
    fontSize: 20,
    lineHeight: 30,
    color: "#3C2F2F",
    marginBottom: 20,
  },
  paymentInfo: {
    paddingHorizontal: 15,
  },
  mainInfoWrap:{
    gap: 16,
    paddingBottom: 14.5,
    borderBottomWidth: 1,
    borderColor: '#F0F0F0',
    marginBottom: 24,
  },
  orderInfoWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoText: {
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 21,
    color: '#7D7D7D',
  },
  totalPriceWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 26,
  },
  totalPriceText: {
    fontFamily: 'Roboto',
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 21,
    color: '#3C2F2F',
  },
  deliveryTimeWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  deliveryTimeInfo: {
    fontFamily: 'Roboto',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 16,
    color: '#3C2F2F',
  },

});

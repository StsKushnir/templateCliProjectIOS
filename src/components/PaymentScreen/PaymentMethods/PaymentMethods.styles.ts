import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  payMethodsWrap: {
    flexDirection: 'column',
    marginTop: 40,
  },
  mainTitle: {
    fontFamily: 'Poppins',
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 30,
    color: '#3C2F2F',
    marginBottom: 22,
  },
  cardsWrap: {
    gap: 27,
    marginBottom: 30,
  },
  saveInfo: {
    flexDirection: 'row',
    gap: 9,
  },
  checkPointSaveData: {
    width: 18,
    height: 18,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#EF2A39',
  },
  saveCardDataText: {
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19,
    color: '#808080',
  },
  finalyOrder: {
    width: '100%',
    marginTop: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  totalPriceWrap: {
    flexDirection: 'column',
  },
  totalPriceTitle: {
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19,
    color: '#808080',
    marginBottom: 4,
  },
  priceTextWrap: {
    flexDirection: 'row',
  },
  priceSymbol: {
    fontFamily: 'Roboto',
    fontWeight: '600',
    fontSize: 32,
    lineHeight: 38,
    color: '#EF2A39',
  },
  priceText: {
    fontFamily: 'Roboto',
    fontWeight: '600',
    fontSize: 32,
    lineHeight: 38,
    color: '#000000',
  },
  payButton: {
    paddingHorizontal: 69,
    paddingVertical: 24,
    backgroundColor: '#3C2F2F',
    borderRadius: 20,
  },
  payButtonText: {
    fontFamily: 'Roboto',
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 21,
    color: '#FFFFFF',
  },
});

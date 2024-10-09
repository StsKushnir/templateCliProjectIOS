import { StyleSheet } from "react-native";
import { ms } from "react-native-size-matters";

export const s = StyleSheet.create({
  orderWrap: {
    marginTop: 50,
  },
  orderSettings: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  spicy: {
    width: 168,
    height: 67,
    justifyContent: "center",
  },
  spicyTitle: {
    fontFamily: 'Roboto',
    fontWeight: '500', 
    fontSize: 14,
    lineHeight: 19, 
    color: '#3C2F2F', 
    marginBottom: 11,
  },
  slider: {
    width: "100%",
    shadowColor: 'rgba(255, 153, 0, 0.50)',
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 13,
    shadowOpacity: 1,
  },
  typesSpicy: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  mild: {
    fontFamily: 'Roboto',
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 16,
    color: '#1CC019',
  },
  hot: {
    fontFamily: 'Roboto',
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 16,
    color: '#EF2A39',
  },
  portionWrap:{
    width: 121,

  },
  portionTitle:{
    marginBottom: 5,
  },
  portionCounter:{
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15,
  
  },
  countBtnsWrap:{
    width: 65,
    height: 65,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  portionsAmount:{
    position: 'absolute',
    fontFamily: "Inter",
    fontWeight: "500",
    fontSize: 18,
    lineHeight: 24,
    color: "#3C2F2F",
    top: '20%',
  },
  countImg: {
    width: '100%',
    height: '100%',
  },

  ordersButtons: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  priceBtn: {
    width: 104,
    height: 70,
    borderRadius: 15,
    borderColor: '#EF2A39',
    borderWidth: 1, 
    backgroundColor: '#EF2A39', 
    justifyContent: 'center',
    alignItems: 'center', 
  },
  orderBtnText: {
    fontFamily: 'Roboto',
    fontWeight: '600',
    fontSize: 22,
    lineHeight: 30, 
    color: '#FFFFFF',
  },
  orderBtn: {
    width: 239,
    height: 70,
    borderRadius: 15,
    borderColor: '#3C2F2F',
    borderWidth: 1, 
    backgroundColor: '#3C2F2F', 
    justifyContent: 'center',
    alignItems: 'center', 
  },
});
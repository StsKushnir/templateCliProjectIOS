import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  topSettings: {
    paddingHorizontal: 19,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  customImg: {
    height: 297,
    width: 217,
    marginTop: 15,
    marginLeft: -40,
  },
  topSettingsMain: {
    width: 166,
  
  },
  titleBold:{
    fontFamily: 'Roboto',
    fontWeight: '800',
    fontSize: 16,
    lineHeight: 16 * 1.8,
    color: '#3C2F2F',
  },
  titleRegular: {
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 16 * 1.8,
    color: '#3C2F2F',
  },

  orderSettings: {
    marginTop: 34,
    flexDirection: 'column',
  },
  spicy: {
    width: 168,
    height: 67,
    justifyContent: "center",
    marginBottom: 50,
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
    marginTop: 54,
  },
  portionTitle:{
    marginBottom: 5,
  },
  portionCounter:{
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 50,
    marginLeft: 35,
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
  trackStyle: {
    height: 7,
    borderRadius: 5,
    backgroundColor: '#ddd',
    width: 30,
    shadowColor: 'rgba(255, 153, 0, 0.50)',
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 13,
    shadowOpacity: 1,
  },
  selectedStyle: {
    backgroundColor: '#EF2A39',
    width: 30,
  },
  markerStyle: {
    height: 18,
    width: 14,
    backgroundColor: '#EF2A39',
    borderColor: '#fff',
    borderWidth: 2,
    marginTop: 4,
    borderRadius: 10,
  },
  unselectedStyle: {
    width: 30,
    backgroundColor: '#ccc',
  },

});
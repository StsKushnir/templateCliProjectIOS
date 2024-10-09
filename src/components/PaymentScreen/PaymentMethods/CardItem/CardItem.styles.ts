import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  cardItem: {
    width: '100%',
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 19,
    paddingLeft: 15,
    paddingRight: 19,
    borderRadius: 20,
  },
  
  selectedShadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 7 },
    shadowOpacity: 0.25,
    shadowRadius: 13,
    elevation: 13, 
  },
  errorShadow: {
    shadowColor: '#EF2A39',
    shadowOffset: { width: 0, height: 7 },
    shadowOpacity: 0.6,
    shadowRadius: 13,
    elevation: 13,
  },
  creditStyle: {
    backgroundColor: '#3C2F2F',
  },
  debitStyle: {
    backgroundColor: '#F3F4F6',
  },
  creditImgStyle: {
    width: 70,
    height: 42,
    marginRight: 30,
  },
  debitImgStyle: {
    width: 83,
    height: 33,
    marginRight: 15,
  },
  cardImage: {
    width: '100%',
    height: '100%',
  },
  cardData: {
    height: '100%',
    justifyContent: 'space-between',
    marginRight: 'auto',
  },
  cardTypeName: {
    fontFamily: 'Roboto',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 16,
  },
  creditNameStyle: {
    color: '#FFFFFF',
  },
  debitNameStyle: {
    color: '#3C2F2F',
  },
  cardNumberStyle: {
    fontFamily: 'Roboto',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 16,
    color: '#808080',
  },
  cardNumberWrap: {
    flexDirection: 'row',
  },
  checkPoint: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderRadius: 100,
    padding: 3,
  },
  pointBody: {
    width: 10,
    height: 10,
    borderRadius: 100,
  },
  creditCheckPointStyle: {
    backgroundColor: '#FFFFFF',
  },
  debitCheckPointStyle: {
    backgroundColor: '#3C2F2F',
  },
});

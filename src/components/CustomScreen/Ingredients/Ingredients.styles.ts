import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  ingredients: {
    marginTop: 20,
    flexDirection: 'column',
  },
  toppings: {
  },
  ingredientsTitle: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 24, 
    color: '#3C2F2F',
    paddingLeft: 19,
  },
  ingredientsWrap: {
    flexDirection: 'row',
    gap: 30,
    marginTop: 9,
    marginLeft: 19,
    marginBottom: 25,
  },
  ingredientItem: {
    width: 84,
    height: 99,
    backgroundColor: '#3C2F2F',
    borderRadius: 15,
    shadowColor: "#000", 
    shadowOffset: {
      width: 0,
      height: 4, 
    },
    shadowOpacity: 0.30, 
    shadowRadius: 6, 
  },
  imgWrap: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    height: 61,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ingredientImage:{
    width: 60,
    height: 50,
  },
  bottomWrap:{
    alignItems: 'center',
    marginVertical: 'auto',
  },
  titleWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', 
    width: '87%', 
  },
  ingredientName: {
    color: '#FFFFFF',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 16,
  },

  sideOptions: {},
});
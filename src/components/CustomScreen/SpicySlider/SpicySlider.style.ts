import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  spicy: {
    width: 168,
    height: 67,
  },
  spicyTitle: {
    fontFamily: 'Roboto',
    fontWeight: '500', 
    fontSize: 14,
    lineHeight: 19, 
    color: '#3C2F2F', 
  },
  trackStyle: {
    height: 6,
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
    height: 20,
    width: 16,
    backgroundColor: '#EF2A39',
    borderColor: '#fff',
    borderWidth: 3,
    marginTop: 4,
    borderRadius: 8,
  },
  unselectedStyle: {
    width: 30,
    backgroundColor: '#ccc',
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
});
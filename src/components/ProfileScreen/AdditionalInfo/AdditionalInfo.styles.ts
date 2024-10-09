import { Dimensions, StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    marginTop: 30,
    justifyContent: "center",
    marginHorizontal: "auto",
    borderTopWidth: 1,
    borderTopColor: "#E8E8E8",
    width: 280,
    paddingTop: 30,
    gap: 20,
  },
  detailsWrap: {
    width: '100%',
    flexDirection: "row",
    justifyContent: 'space-between',
    
  },
  detailsText: {
    fontFamily: 'Roboto',
    fontWeight: '500',
    fontSize: 17,
    lineHeight: 28, 
    color: '#808080',
  },
});

import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    height: 500,
  },
  scrollcontainer: {},
  listWrap: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    paddingBottom: 50,
    paddingHorizontal: 19,
    columnGap: 22,
    rowGap: 18,
  },
  burgerItem: {
    width: 171,
    height: 218,
    padding: 11,
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
    marginVertical: 0,
    margin: "auto",
    width: "75%",
    height: "53%",
  },
  burgerType: {
    fontFamily: "Roboto",
    fontWeight: "600",
    lineHeight: 18.5,
    color: "#3C2F2F",
  },
  burgerName: {
    marginTop: 3,
    fontFamily: "Roboto",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 18.5,
    color: "#3C2F2F",
  },
  burgerBottom: {
    marginTop: "auto",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  burgerRatingWrap: {
    flexDirection: "row",
    gap: 5,
  },
  burgerLikeWrap: {},
  noResultsWrap: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 'auto',
    marginTop: 50,
  },
  noResultsText: {
    fontFamily: "Poppins",
    fontWeight: "500",
    fontSize: 18,
    lineHeight: 27,
    color: "#6A6A6A",
    textAlign: 'center', 
  },
  nobBurgersImageWrap: {
    marginLeft: 40,
    marginTop: 40,
  },
  nobBurgersImage: {
    width: 250,
    height: 250,
  },
});

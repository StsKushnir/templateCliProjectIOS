import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  navigatorWrap: {
    position: "absolute",
    height: "100%",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  tabBarImgWrap: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 5,
  },
  customTabContainer: {
    backgroundColor: "#EF2A39", 
    width: 65, 
    height: 65, 
    borderRadius: 35, 
    alignItems: "center",
    justifyContent: "center",
    position: "relative", 
    bottom: 25, 
    shadowColor: "#000", 
    shadowOffset: {
      width: 0, 
      height: 5, 
    },
    shadowOpacity: 0.4, 
    shadowRadius: 16, 
    elevation: 5, 
  },
  iconContainer: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
  },
  homeAfter: {
    width: 4,
    height: 4,
    backgroundColor: "white",
    borderRadius: 2,
    position: "absolute",
    bottom: -10,
  },
});
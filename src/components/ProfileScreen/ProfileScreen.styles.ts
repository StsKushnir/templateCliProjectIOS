import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  background: {
    position: "absolute",
    top: 50,
    width: 98,
    height: 196,
  },
  leftBackground: {
    left: 0,
  },
  rightBackground: {
    right: 0,
  },
  gradient: {
    flex: 1,
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: 1,
  },
  accountWrap: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  main: {
    position: "relative",
    marginTop: "95%",
    height: "100%",
    width: "100%",
    borderBlockColor: "white",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 35,
  },
  accountImgWrap: {
    position: "absolute",
    top: -90,
    borderRadius: 20,
    borderWidth: 4,
    borderColor: "#EF2A39",
    overflow: "hidden",
    width: 139,
    height: 139,
  },
  info: {
    marginTop: 80,
    paddingHorizontal: 19,
    paddingBottom: 45,
  },
});

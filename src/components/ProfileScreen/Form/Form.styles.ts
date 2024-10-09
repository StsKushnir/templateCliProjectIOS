import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  text: {
    borderColor: "black",
  },
  inputWrap: {
    position: "relative",
    width: 370,
    height: 60,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#E1E1E1",
    justifyContent: "center",
  },
  placeholder: {
    position: "absolute",
    top: -10,
    left: 12,
    backgroundColor: "white",
    paddingHorizontal: 5,
  },
  placeholderText: {
    color: "#808080",
  },
  input: {
    paddingLeft: 25,
    paddingRight: 5,
    borderWidth: 0,
    fontFamily: "Roboto",
    fontWeight: "600",
    fontSize: 17,
    lineHeight: 21,
    color: "#3C2F2F",
  },
  passPlaceholder: {
    flex: 1,
    flexDirection: 'row',
    gap: 7,
  },
  inputMargin: {
    marginBottom: 25,
  },

});

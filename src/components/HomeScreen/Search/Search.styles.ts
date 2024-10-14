import { ScaledSheet } from "react-native-size-matters";

export const s = ScaledSheet.create({
  container: {
    
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 19,
    marginTop: 15,
  },
  inputContainer: {
    width: '100%',
    flexDirection: "row",
    alignItems: "center",
  },
  inputWrap: {
    flexDirection: 'row',
    alignItems: "center",
    width: '75%',
    borderColor: "#3C2F2F",
    borderRadius: 20,
    backgroundColor: "#ffffff",
    height: 55,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    inputWrapper: {},
    shadowOpacity: 0.15,
    shadowRadius: 19,
    elevation: 5,
    paddingHorizontal: 20,
    flex: 1,
  },
  searchInput: {
    fontFamily: "Roboto-Regular",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 15,
    lineHeight: 17,
    color: "#3C2F2F",
    flex: 1,
    marginLeft: 10,
  },
  settingsButton: {
    position: 'relative',
    width: 55,
    height: 55,
    marginLeft: 13,
    backgroundColor: "#EF2A39",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});

import { Dimensions, StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    marginTop: 35,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  edit: { 
    flexDirection: "row",
    backgroundColor: '#3C2F2F',
    paddingVertical: 17,
    paddingHorizontal: 25,
    borderRadius: 20,
    alignItems: 'center',
    gap: 17,
  },
  editText: {
    fontFamily: 'Roboto',
    fontWeight: '500',
    fontSize: 18,
    lineHeight: 28, 
    color: '#FFFFFF',
  },
  logOut: { 
    flexDirection: "row",
    backgroundColor: '#FFFFFF',
    borderWidth: 3,
    borderColor: '#EF2A39',
    paddingVertical: 17,
    paddingHorizontal: 25,
    borderRadius: 20,
    alignItems: 'center',
    gap: 17,
  },
  logOutText: {
    fontFamily: 'Roboto',
    fontWeight: '500',
    fontSize: 18,
    lineHeight: 28,
    color: '#EF2A39',
  },
});

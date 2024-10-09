import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 19,
  },
  logoWrap: {
    flexDirection: 'column',
  },
  description: {
    fontFamily: 'Poppins-Regular',
    fontWeight: '500',
    fontSize: 18,
    lineHeight: 27,
    color: '#6A6A6A',
  },
  accountImgWrap: {
    width: 55,
    height: 55,
    // paddingTop: 5,
    // paddingRight: 5,
    borderRadius: 20, 
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

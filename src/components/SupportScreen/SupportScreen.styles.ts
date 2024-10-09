import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    position: "relative",
    paddingHorizontal: 19,
    backgroundColor: "#FFFFFF",
  },
  chatWrap: {
    width: "100%",
    marginTop: 110,
  },
  messageWrap: {
    width: "100%",
    marginBottom: 38,
  },
  bothMessage: {
    alignItems: "flex-start",
    gap: 14,
  },
  userMessage: {
    flexDirection: "row-reverse",
  },
  assistantMessage: {
    flexDirection: "row",
  },
  textWrap: {
    maxWidth: 235,
  },
  userTextWrap: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 7 },
    shadowOpacity: 0.30,
    shadowRadius: 15,
  },
  messageText: {
    width: "100%",
    fontFamily: "Roboto",
    fontWeight: "500",
    fontSize: 18,
    lineHeight: 21,
    paddingHorizontal: 21,
    paddingVertical: 13,
    borderRadius: 20,
    overflow: "hidden",
  },
  userText: {
    color: "#FFFFFF",
    backgroundColor: "#EF2A39",
  },
  assistantText: {
    color: "#3C2F2F",
    backgroundColor: "#F3F4F6",
  },

  inputWrap: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.18,
    shadowRadius: 26,
    borderRadius: 20,

  },
  inputMessage: {
    paddingLeft: 27,
    paddingVertical: 21,
    
  },

});

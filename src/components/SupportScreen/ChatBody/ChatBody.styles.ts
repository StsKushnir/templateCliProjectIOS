import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
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
    position: 'relative',
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
  lastActivity: {
    position: 'absolute',
    bottom: -25,
    right: '25%',
    fontFamily: 'Roboto',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 14 * 1.35, 
    color: '#DBDADA',
  },
});

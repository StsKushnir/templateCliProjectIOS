import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9e9e9e", 
  },
  modalContainer: {
    width: 340,
    height: 400, 
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5, 
  },
  successfulIconWrap: {
    width: 90,
    height: 90,
    backgroundColor: '#EF2A39',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalTitle: {
    fontFamily: 'Poppins',
    fontWeight: '700',
    fontSize: 30,
    lineHeight: 45,
    color: '#EF2A39',
    marginBottom: 6,
  },
  modalMessage: {
    width: 199,
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 22,
    textAlign: 'center',
    color: '#808080',
    marginBottom: 52,
  },
  closeButton: {
    paddingVertical: 16,
    paddingHorizontal: 77,
    backgroundColor: "#EF2A39",
    borderRadius: 15,
  },
  closeButtonText: {
    fontFamily: 'Roboto',
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 28,
    textAlign: 'center',
    color: '#FFFFFF',
  },
});
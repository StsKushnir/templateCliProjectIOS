import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    marginTop: 30,
    marginBottom: 30,
    paddingHorizontal: 19,
  },
  filtersWrap: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },
  categoryButton: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 25,
    paddingVertical: 13,
    backgroundColor: "#F3F4F6",
    borderRadius: 20,
  },
  categoryText: {
    fontFamily: "Inter",
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 19,
    color: "#6A6A6A",
  },
});

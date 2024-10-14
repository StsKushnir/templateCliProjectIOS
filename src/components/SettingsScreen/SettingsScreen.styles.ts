import { ScaledSheet } from "react-native-size-matters";

export const s = ScaledSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 100,
  },
  dropMenuTitle: {
    fontFamily: "Roboto",
    fontWeight: "600",
    fontSize: 20,
    lineHeight: 25,
    color: "#3C2F2F",
    textAlign: "center",
    marginBottom: 3,
  },
  menuWrap: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
  typeCategoryTitle: {
    marginBottom: 10,
    alignItems: "flex-start",
    fontFamily: 'Inter',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 19,
    color: '#6A6A6A',
  },
  sortCategoryWrap: {
    marginTop: 25,
    flexDirection: "column",
    gap: 6,
  },
  sortPriceWrap: {
    flexDirection: "column",
    gap: 10,
  },
  sortingWrap: {
    flexDirection: "row",
    gap: 5,
    alignItems: 'center',
  },
  sortingCheckBox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderRadius: 100,
    borderColor: "#EF2A39",
    alignItems: "center",
    justifyContent: "center",
  },
  sortingCheckBoxPoint: {
    width: 10,
    height: 10,
    borderRadius: 100,
  },
  sortTypeName: {
    fontFamily: 'Poppins',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 27,
    color: '#6A6A6A',
  },
});

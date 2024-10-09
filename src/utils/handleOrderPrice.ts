import { NavigationProps } from "../types/NavigationTypes";

export const handleOrderPrice = (
  price: number,
  navigation: NavigationProps["navigation"],
  setOrderPrice: (price: number) => void,
  previousScreen: string
) => {
  setOrderPrice(price);
  navigation.replace("Payment", { previousScreen });
};

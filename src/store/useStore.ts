import { create } from "zustand";
import { Burger } from "../types/BurgerType";

type Store = {
  product: Burger | null;
  customBurgerAmount: number;
  customBurgerPrice: number;
  orderPrice: number;
  favorites: string[];
  selectedCategory: string;
  searchBurger: string,
  sortCategory: string,
  setProduct: (burger: Burger | null) => void;
  setCustomBurgerAmount: (item: number) => void;
  setCustomBurgerPrice: (price: number | ((prevPrice: number) => number)) => void;
  setOrderPrice: (price: number) => void;
  setFavorites: (burgerName: string) => void;
  setSelectedCategory: (category: string) => void;
  setSearchBurger: (value: string) => void;
  setSortCategory: (typeSortCategory: string) => void;
};

const useStore = create<Store>((set) => ({
  product: null,
  customBurgerAmount: 1,
  customBurgerPrice: 3,
  orderPrice: 0,
  favorites: [],
  selectedCategory: 'All',
  searchBurger: '',
  sortCategory: '',
  setProduct: (burger) => set(() => ({ product: burger })),
  setCustomBurgerAmount: (item) => set(() => ({ customBurgerAmount: item })),
  setCustomBurgerPrice: (price) => 
    set((state) => ({
      customBurgerPrice: typeof price === "function" ? price(state.customBurgerPrice) : price,
    })),
  setOrderPrice: (price) => set(() => ({ orderPrice: price })),
  setFavorites: (burgerName: string) => 
    set((state) => {
      if (state.favorites.includes(burgerName)) {
        return { favorites: state.favorites.filter((name) => name !== burgerName) };
      } else {
        return { favorites: [...state.favorites, burgerName] };
      }
    }),
  
    setSelectedCategory: (category) => set(() => ({selectedCategory: category})),
    setSearchBurger: (value) => set(() => ({searchBurger: value})),
    setSortCategory: (typeSortCategory) => set(() => ({sortCategory: typeSortCategory})),
    
}));

export default useStore;

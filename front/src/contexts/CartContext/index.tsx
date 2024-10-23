import { createContext, useContext, useState } from "react";
import { Item } from "./types";

interface CartContextType {
  cartItems: Item[];
  addItemToCart: (item: Item) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<Item[]>([]);

  const addItemToCart = (item: Item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addItemToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error();
  return context;
};

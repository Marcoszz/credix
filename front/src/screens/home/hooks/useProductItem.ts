import { useState } from "react";
import { useCartContext } from "../../../contexts/CartContext";
import { Product } from "../../../services/hooks/useGetProducts";

const useProductItem = (product: Product) => {
  const { addItemToCart, cartItems } = useCartContext();
  const [quantity, setQuantity] = useState(0);

  const getTotalQuantityInCart = (productId: string) => {
    return cartItems.reduce((total, item) => {
      return item.productId === productId ? total + item.quantity : total;
    }, 0);
  };

  const handleIncrement = () => {
    const totalQuantityInCart = getTotalQuantityInCart(product.id);
    if (quantity + totalQuantityInCart < product.stockQuantity) {
      setQuantity((prevQuantity) => prevQuantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleAddToCart = () => {
    const item = {
      productName: product.productName,
      quantity,
      unitPriceCents: product.unitPriceCents,
      productId: product.id,
    };

    addItemToCart(item);
    setQuantity(0);
  };

  return {
    quantity,
    handleIncrement,
    handleDecrement,
    handleAddToCart,
    getTotalQuantityInCart,
  };
};

export default useProductItem;

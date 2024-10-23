import { useState } from "react";
import { Product } from "../../../../../services/hooks/useGetProducts";
import { useCart } from "../../../../../contexts/CartContext";

const useProductItem = (product: Product) => {
    const [quantity, setQuantity] = useState(0);
    const { addItemToCart, cartItems } = useCart();

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
        
        setQuantity(0);
        addItemToCart(item);
    };

    return {
        quantity,
        handleIncrement,
        handleDecrement,
        handleAddToCart,
        getTotalQuantityInCart
    }
}

export default useProductItem;
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../../../contexts/CartContext";

const useCart = () => {
    const navigate = useNavigate();
    
    const {cartItems, removeItemFromCart} = useCartContext();
    
    const handlePressBack = () => {
        navigate(-1);
    }

    return {
        cartItems,
        removeItemFromCart, 
        handlePressBack
    }
}

export default useCart;
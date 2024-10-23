import { useNavigate } from "react-router-dom";
import { useCartContext } from "../../../contexts/CartContext";

const useCart = () => {
    const navigate = useNavigate();
    
    const {cartItems, removeItemFromCart} = useCartContext();
    
    const handlePressBack = () => {
        navigate(-1);
    }

    const handleGoToOrderClick = () => {
        navigate("/order");
    }

    return {
        cartItems,
        removeItemFromCart, 
        handlePressBack,
        handleGoToOrderClick
    }
}

export default useCart;
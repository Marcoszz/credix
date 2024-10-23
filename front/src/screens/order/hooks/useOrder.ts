import { useNavigate } from "react-router-dom";

const useOrder = () => {
    const navigate = useNavigate();

    const handlePressBack = () => {
        navigate(-1);
    }

    return {
        handlePressBack
    }
}

export default useOrder;
import { useNavigate } from "react-router-dom";

const useStatus = () => {
    const navigate = useNavigate();

    const handlePressBack = () => {
        navigate(-1);
    }

    const handlePressHome = () => {
        navigate("/");
    }

    return {
        handlePressBack,
        handlePressHome
    }

}

export default useStatus;
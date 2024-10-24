import { useState } from "react";
import useGetOrdersFromBuyerTaxId from "../../../services/hooks/useGetOrdersFromBuyerTaxId";

const useOrders = () => {
    const [buyerTaxId, setBuyerTaxId] = useState<string>("");
    const {orders, error, fetchOrders, loading} = useGetOrdersFromBuyerTaxId();

    const handleChangeBuyerTaxId = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBuyerTaxId(event.target.value);
    }

    const handleSearchClick = () => {
        fetchOrders(buyerTaxId);
    }

    return {
        buyerTaxId,
        orders,
        error,
        handleSearchClick,
        loading,
        handleChangeBuyerTaxId
    }

}

export default useOrders;
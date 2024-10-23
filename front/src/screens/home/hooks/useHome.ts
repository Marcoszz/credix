import { useEffect } from "react";
import useGetProducts from "../../../services/hooks/useGetProducts";

const useHome = () => {
    const {products, loading, error, fetchProducts} = useGetProducts();

    useEffect(() => {
        fetchProducts();
    }, [])

    return {
        products,
        loading,
        error
    }
}

export default useHome;
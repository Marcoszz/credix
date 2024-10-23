import { useEffect, useState } from "react";
import useGetProducts from "../../../services/hooks/useGetProducts";
import { useNavigate } from "react-router-dom";

const useHome = () => {
  const navigate = useNavigate();
  const { products, loading, error, fetchProducts } = useGetProducts();
  
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const paginatedProducts = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleFinishPurchaseClick = () => {
    navigate("/cart");
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleChangePage = (page: number) => {
    setCurrentPage(page);
  };

  return {
    products: paginatedProducts,
    loading,
    error,
    currentPage,
    totalPages: Math.ceil(products.length / itemsPerPage),
    handleChangePage,
    handleFinishPurchaseClick
  };
};

export default useHome;

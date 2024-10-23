import { Button, Pagination, Paper } from "@mui/material";
import Header from "../../components/Header";
import useHome from "./hooks/useHome";
import ProductsList from "./components/productsList";
import { useCart } from "../../contexts/CartContext";

const Home = () => {
  const {
    products,
    currentPage,
    error,
    handleChangePage,
    loading,
    totalPages,
  } = useHome();

  const { cartItems } = useCart();

  return (
    <>
      <Header />
      <div className="w-full min-h-[100vh] flex flex-col items-center gap-4 px-4 py-24">
        <Paper
          sx={{
            width: "100%",
            maxWidth: "1000px",
            minHeight: "740px",
            padding: "16px",
            margin: "0 auto",
            boxSizing: "border-box",
          }}
          elevation={3}
        >
          <ProductsList productsList={products} />
          <div className="flex justify-center mt-4">
            <Button
              variant="contained"
              color="primary"
              disabled={!cartItems.length}
            >
              Finish Purchase
            </Button>
          </div>
        </Paper>
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={(_, page) => handleChangePage(page)}
        />
      </div>
    </>
  );
};

export default Home;

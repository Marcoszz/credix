import {
  Alert,
  Button,
  CircularProgress,
  Pagination,
  Paper,
} from "@mui/material";
import Header from "../../components/Header";
import useHome from "./hooks/useHome";
import ProductsList from "./components/productsList";
import { Product } from "../../services/hooks/useGetProducts";
import { Item } from "../../contexts/CartContext/types";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import { useCartContext } from "../../contexts/CartContext";

const renderContent = (
  loading: boolean,
  error: string | null,
  products: Product[],
  handleFinishPurchaseClick: () => void,
  cartItems: Item[]
) => {
  if (loading) return <CircularProgress size={80} />;

  if (error || !products) {
    return (
      <>
        <Alert severity="error">
          {`An error occurred while fetching products: ${error}`}
        </Alert>
        <SentimentVeryDissatisfiedIcon sx={{ fontSize: 240 }} />
      </>
    );
  }

  return (
    <>
      <ProductsList productsList={products} />
      <div className="flex justify-center mt-4">
        <Button
          variant="contained"
          color="primary"
          disabled={!cartItems.length}
          onClick={handleFinishPurchaseClick}
        >
          Go to Cart
        </Button>
      </div>
    </>
  );
};

const Home = () => {
  const {
    products,
    currentPage,
    error,
    handleChangePage,
    loading,
    totalPages,
    handleFinishPurchaseClick,
  } = useHome();

  const { cartItems } = useCartContext();

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
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
          elevation={3}
        >
          {renderContent(
            loading,
            error,
            products,
            handleFinishPurchaseClick,
            cartItems
          )}
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

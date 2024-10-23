import { ArrowBack } from "@mui/icons-material";
import { Button, Paper } from "@mui/material";
import Header from "../../components/Header";
import CartList from "./components/CartList";
import useCart from "./hooks/useCart";
import Total from "./components/Total";

const Cart = () => {
  const { cartItems, removeItemFromCart, handlePressBack } = useCart();

  return (
    <>
      <Header />
      <div className="w-full min-h-[100vh] flex items-center gap-4 px-4 py-24">
        <Paper
          sx={{
            width: "100%",
            height: "100%",
            maxWidth: "1000px",
            minHeight: "740px",
            padding: "16px",
            margin: "0 auto",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
          }}
          elevation={3}
        >
          <ArrowBack onClick={handlePressBack} sx={{ cursor: "pointer" }} />
          <CartList
            cartItems={cartItems}
            removeItemFromCart={removeItemFromCart}
          />
          <Total cartItems={cartItems} />
          <div
            className="h-full flex justify-center items-end mt-auto"
            style={{ paddingBottom: "16px" }}
          >
            <Button
              variant="contained"
              color="primary"
              disabled={!cartItems.length}
            >
              Go to Payment
            </Button>
          </div>
        </Paper>
      </div>
    </>
  );
};

export default Cart;

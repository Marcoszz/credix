import { ArrowBack } from "@mui/icons-material";
import { Paper } from "@mui/material";
import Header from "../../components/Header";
import OrderForm from "./components/OrderForm";
import useOrder from "./hooks/useOrder";

const Order = () => {
  const { handlePressBack } = useOrder();
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
          <OrderForm />
        </Paper>
      </div>
    </>
  );
};

export default Order;

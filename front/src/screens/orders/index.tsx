import { Button, FormControl, Input, Paper } from "@mui/material";
import Header from "../../components/Header";
import OrdersList from "./components/OrdersList";
import useOrders from "./hooks/useOrders";

const Orders = () => {
  const {
    buyerTaxId,
    error,
    handleSearchClick,
    handleChangeBuyerTaxId,
    loading,
    orders,
  } = useOrders();
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
          }}
          elevation={3}
        >
          <div className="flex flex-col gap-16 p-4 overflow-auto">
            <div className="flex gap-4">
              <FormControl fullWidth>
                <h2 className="text-sm font-bold mb-2">CNPJ:</h2>
                <Input
                  value={buyerTaxId}
                  onChange={handleChangeBuyerTaxId}
                  required
                />
              </FormControl>
              <Button
                variant="contained"
                color="primary"
                disabled={!buyerTaxId}
                onClick={handleSearchClick}
              >
                Search
              </Button>
            </div>
            <OrdersList orders={orders} loading={loading} />
          </div>
        </Paper>
      </div>
    </>
  );
};

export default Orders;

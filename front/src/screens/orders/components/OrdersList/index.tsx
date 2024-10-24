import { Alert, CircularProgress } from "@mui/material";
import { Order } from "../../../../services/hooks/useGetOrdersFromBuyerTaxId";
import SentimentNeutralIcon from "@mui/icons-material/SentimentNeutral";
import OrderItem from "../OrderItem";

type Props = {
  orders: Order[];
  loading: boolean;
};

const OrdersList = ({ loading, orders }: Props) => {
  if (loading)
    return (
      <div className="flex justify-center mt-64">
        <CircularProgress size={80} />
      </div>
    );

  if (!orders.length)
    return (
      <div className="flex flex-col justify-center items-center mt-32">
        <Alert severity="info">No orders found!</Alert>
        <SentimentNeutralIcon sx={{ fontSize: 240 }} />
      </div>
    );

  return (
    <>
      <ul className="space-y-4 h-[450px] overflow-auto">
        {orders.map((order, i) => (
          <OrderItem key={i} order={order} />
        ))}
      </ul>
    </>
  );
};

export default OrdersList;

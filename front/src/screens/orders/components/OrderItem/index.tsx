import { Order } from "../../../../services/hooks/useGetOrdersFromBuyerTaxId";
import { centsToReais } from "../../../../utils";

type Props = {
  order: Order;
};

const OrderItem = ({ order }: Props) => {
  return (
    <>
      <li className="flex justify-between items-center p-2 border-b">
        <div>
          <h3 className="font-semibold">{order.id}</h3>
          <p>Total: {centsToReais(order.totalAmountCents)}</p>
          <p>Status: {order.status.toUpperCase()}</p>
        </div>
      </li>
    </>
  );
};

export default OrderItem;

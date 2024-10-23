import { Item } from "../../../../contexts/CartContext/types";
import { centsToReais } from "../../../../utils";

type Props = {
  cartItems: Item[];
};

const Total = ({ cartItems }: Props) => {
  if (!cartItems.length) return <></>;
  const taxAmountReais = centsToReais(
    Number(import.meta.env.VITE_TAX_AMOUNT_CENTS)
  );
  const shippingCostsReais = centsToReais(
    Number(import.meta.env.VITE_SHIPPING_COSTS_CENTS)
  );
  const totalReais = centsToReais(
    cartItems.reduce(
      (acc, item) => acc + item.unitPriceCents * item.quantity,
      0
    ) +
      Number(import.meta.env.VITE_TAX_AMOUNT_CENTS) +
      Number(import.meta.env.VITE_SHIPPING_COSTS_CENTS)
  );

  return (
    <div className="w-full flex flex-col items-end">
      <h2 className="text-sm font-bold mb-4">Tax Ammount: {taxAmountReais}</h2>
      <h2 className="text-sm font-bold mb-4">Shipping: {shippingCostsReais}</h2>
      <h2 className="text-sm font-bold mb-4">Total: {totalReais}</h2>
    </div>
  );
};

export default Total;

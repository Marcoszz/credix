import { Alert } from "@mui/material";
import { Item } from "../../../../contexts/CartContext/types";
import CartItem from "../CartItem";

type Props = {
  cartItems: Item[];
  removeItemFromCart: (index: number) => void;
};

const CartList = ({ cartItems, removeItemFromCart }: Props) => {
  return (
    <div className="w-full h-full flex flex-col justify-between gap-4 p-4 overflow-auto">
      <h2 className="text-lg font-bold mb-4">Cart</h2>
      {cartItems.length === 0 ? (
        <Alert severity="info">Empty cart!</Alert>
      ) : (
        <ul className="space-y-4 h-[450px] overflow-auto">
          {cartItems.map((item, i) => (
            <CartItem
              key={i}
              index={i}
              item={item}
              handleRemoveItem={removeItemFromCart}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartList;

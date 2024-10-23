import { Button } from "@mui/material";
import { Item } from "../../../../contexts/CartContext/types";
import { centsToReais } from "../../../../utils";

type Props = {
  index: number;
  item: Item;
  handleRemoveItem: (index: number) => void;
};

const CartItem = ({ item, index, handleRemoveItem }: Props) => {
  return (
    <>
      <li
        key={item.productId}
        className="flex justify-between items-center p-2 border-b"
      >
        <div>
          <h3 className="font-semibold">{item.productName}</h3>
          <p>Price (unit): {centsToReais(item.unitPriceCents)}</p>
          <p>Quantity: {item.quantity}</p>
        </div>
        <Button variant="outlined" onClick={() => handleRemoveItem(index)}>
          DELETE
        </Button>
      </li>
    </>
  );
};

export default CartItem;

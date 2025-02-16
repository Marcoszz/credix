import FlatwareIcon from "@mui/icons-material/Flatware";
import { Button, Card } from "@mui/material";
import { Product } from "../../../../services/hooks/useGetProducts";
import { centsToReais } from "../../../../utils";
import useProductItem from "../../hooks/useProductItem";

type Props = {
  product: Product;
};

const ProductItem = ({ product }: Props) => {
  const {
    quantity,
    handleAddToCart,
    handleDecrement,
    handleIncrement,
    getTotalQuantityInCart,
  } = useProductItem(product);

  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: "270px",
        minHeight: "220px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        gap: "8px",
        padding: "16px",
      }}
    >
      <div className="w-20 h-20 bg-gray-200 rounded-full flex justify-center items-center">
        <FlatwareIcon sx={{ fontSize: 40 }} />
      </div>
      <div className="flex flex-col justify-between items-start w-full">
        <span className="text-xs">{product.productName}</span>
        <span className="text-xs">{centsToReais(product.unitPriceCents)}</span>
      </div>
      <div className="flex gap-4 justify-center items-center w-full mt-4">
        <Button
          variant="contained"
          size="small"
          onClick={handleDecrement}
          disabled={quantity === 0}
        >
          -
        </Button>
        <span>{quantity}</span>
        <Button
          variant="contained"
          size="small"
          onClick={handleIncrement}
          disabled={
            quantity + getTotalQuantityInCart(product.id) >=
            product.stockQuantity
          }
        >
          +
        </Button>
      </div>
      <Button
        size="small"
        variant="contained"
        onClick={handleAddToCart}
        disabled={quantity === 0}
      >
        Add to cart
      </Button>
    </Card>
  );
};

export default ProductItem;

import { Product } from "../../../../services/hooks/useGetProducts";
import ProductItem from "../productItem";

type Props = {
  productsList: Product[];
};

const ProductsList = ({ productsList }: Props) => {
  return (
    <div className="grid grid-cols-3 grid-rows-3 place-items-center gap-8 p-4">
      {productsList.map((product, i) => (
        <ProductItem key={i} product={product} />
      ))}
    </div>
  );
};

export default ProductsList;

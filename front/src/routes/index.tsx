import Cart from "../screens/cart";
import Home from "../screens/home";
import Order from "../screens/order";

type Route = {
  path: string;
  element: () => JSX.Element;
};

export const routes: Route[] = [
  {
    path: "/",
    element: Home,
  },
  {
    path: "/cart",
    element: Cart,
  },
  {
    path: "/order",
    element: Order,
  },
];

import { useLocation } from "react-router-dom";
import Cart from "../screens/cart";
import Home from "../screens/home";
import Order from "../screens/order";
import Status from "../screens/status";
import { FC } from "react";

type Route = {
  path: string;
  element: FC<any>;
};

const StatusWrapper: React.FC = () => {
  const location = useLocation();
  const { error } = location.state || { error: null };

  return <Status error={error} />;
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
  {
    path: "/status",
    element: StatusWrapper,
  },
];

import Home from "../screens/home";
import Payment from "../screens/payment";

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
    path: "/payment",
    element: Payment,
  },
];

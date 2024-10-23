import Home from "../screens/home";

type Route = {
  path: string;
  element: () => JSX.Element;
};

export const routes: Route[] = [
  {
    path: "/",
    element: Home,
  },
];

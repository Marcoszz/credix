import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import { routes } from "./routes";
import { CartProvider } from "./contexts/CartContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CartProvider>
      <BrowserRouter>
        <Routes>
          {routes.map((route, i) => (
            <Route key={i} path={route.path} element={<route.element />} />
          ))}
        </Routes>
      </BrowserRouter>
    </CartProvider>
  </React.StrictMode>
);

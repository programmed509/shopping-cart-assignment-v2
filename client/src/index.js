import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { CategoriesProvider } from "./context/categories.context";
import { ProductsProvider } from "./context/products.context";
import { CartProvider } from "./context/cart.context";
import { UserProvider } from "./context/user.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <CartProvider>
          <CategoriesProvider>
            <ProductsProvider>
              <App />
            </ProductsProvider>
          </CategoriesProvider>
        </CartProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

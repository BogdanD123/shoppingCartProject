import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Categories from "./features/pages/components/Categories/Categories";
import Products from "./features/pages/Products/Products";
import ContactInfo from "./features/pages/ContactAndInfo/ContactInfo";
import ProductInfo from "./features/pages/Products/ProductInfo";
import NotFoundPage from "./NotFoundPage";
import ShoppingCart from "./features/pages/ShoppingCart/ShoppingCart";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "products/:products",
    element: <ProductInfo />,
  },
  {
    path: "/contact",
    element: <ContactInfo />,
  },
  {
    path: "/shopping",
    element: <ShoppingCart />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

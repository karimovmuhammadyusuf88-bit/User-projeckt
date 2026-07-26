// import { router } from "./router";
import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Users from "../pages/Users";
import Products from "../pages/Products";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Users />,
      },
      {
        path: "products",
        element: <Products />,
      },
    ],
  },
]);
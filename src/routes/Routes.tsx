import React from "react";
import { Navigate, Outlet, RouteObject, useRoutes } from "react-router-dom";
import Login from "../pages/Login";
import ProductLanding from "../pages/Products/ProductLanding";
import { getUserDetails } from "../redux-store/authentication/auth.slice";
import { useSelector } from "react-redux";

const PRIVATE: RouteObject[] = [
  {
    path: "/product",
    element: <Outlet />,
    children: [
      {
        path: "",
        element: <ProductLanding />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to={"product"} />,
  },
];

const PUBLIC: RouteObject[] = [
  {
    path: "/login",
    element: <Outlet />,
    children: [
      {
        path: "",
        element: <Login />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to={"login"} />,
  },
];

function Routes() {
  const { token } = useSelector(getUserDetails);
  return useRoutes(token ? PRIVATE : PUBLIC);
}

export default Routes;

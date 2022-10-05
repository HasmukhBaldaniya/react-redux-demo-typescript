import React from 'react';
import { Outlet, RouteObject, useRoutes } from 'react-router-dom';
import Login from '../pages/Login';
import ProductLanding from '../pages/Products/ProductLanding';

const PRIVATE: RouteObject[] = [
  {
    path: '/product',
    element: <Outlet />,
    children: [
      {
        path: '',
        element: <ProductLanding />,
      },
    ],
  },
];

const PUBLIC: RouteObject[] = [
  {
    path: '/login',
    element: <Outlet />,
    children: [
      {
        path: '',
        element: <Login />,
      },
    ],
  },
  {
    path: '*',
    element: <>Not found</>,
  },
];

function Routes() {
  const isAuthenticated = false;
  return useRoutes(isAuthenticated ? PRIVATE : PUBLIC);
}

export default Routes;

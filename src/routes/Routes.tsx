import React from 'react';
import { Outlet, RouteObject, useRoutes } from 'react-router-dom';
import { useLoginUserMutation } from '../feature/authentication/users';
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
  const [, { data }] = useLoginUserMutation();

  return useRoutes(data?.token ? PRIVATE : PUBLIC);
}

export default Routes;

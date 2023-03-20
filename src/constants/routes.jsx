import React from 'react';
import { Navigate } from 'react-router-dom';
import { AppCC, AppFC } from '@components/App/AppRealization';

const mainRoutes = [
  {
    path: '/*',
    element: <Navigate to="/func/home" />,
  },
  {
    path: '/func/*',
    element: <AppFC />,
  },
  {
    path: '/class/*',
    element: <AppCC />,
  },
];

export default mainRoutes;

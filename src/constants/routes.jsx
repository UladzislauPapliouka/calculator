import React from 'react';
import { Navigate } from 'react-router-dom';
import { ClassApp, FuncApp } from '@components/AppVariants';

const mainRoutes = [
  {
    path: '/*',
    element: <Navigate to="/func/home" />,
  },
  {
    path: '/func/*',
    element: <FuncApp />,
  },
  {
    path: '/class/*',
    element: <ClassApp />,
  },
];
export default mainRoutes;

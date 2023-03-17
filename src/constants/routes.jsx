import React from 'react';
import { Navigate } from 'react-router-dom';
import { ClassApp, FuncApp } from '@components/App';

const mainRoutes = [
  {
    path: '/*',
    element: <Navigate />,
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

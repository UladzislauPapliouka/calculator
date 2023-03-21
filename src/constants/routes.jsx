import React from 'react';
import { Navigate } from 'react-router-dom';
import { AppCC, AppFC } from '@components/App/AppRealization';
import {
  APP_CC_ROUTE,
  APP_FC_ROUTE,
  HOME_FC_ROUTE,
  UNMATCHED_ROUTE,
} from '@constants/links';

const mainRoutes = [
  {
    path: UNMATCHED_ROUTE,
    element: <Navigate to={HOME_FC_ROUTE} />,
  },
  {
    path: APP_FC_ROUTE,
    element: <AppFC />,
  },
  {
    path: APP_CC_ROUTE,
    element: <AppCC />,
  },
];

export default mainRoutes;

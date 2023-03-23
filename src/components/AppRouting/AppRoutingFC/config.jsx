import React from 'react';
import { Navigate } from 'react-router-dom';

import {
  HOME_FC_ROUTE,
  HOME_ROUTE,
  SETTINGS,
  UNMATCHED_ROUTE,
} from '@constants/links';
import { CalculatorFC } from '@pages/Calculator';
import { SettingsFC } from '@pages/Settings';

const appRoutes = [
  {
    path: UNMATCHED_ROUTE,
    element: <Navigate to={HOME_FC_ROUTE} replace />,
  },
  {
    path: HOME_ROUTE,
    element: <CalculatorFC />,
  },
  {
    path: SETTINGS,
    element: <SettingsFC />,
  },
];

export default appRoutes;

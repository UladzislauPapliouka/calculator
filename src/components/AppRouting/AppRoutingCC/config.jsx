import React from 'react';
import { Navigate } from 'react-router-dom';

import {
  HOME_CC_ROUTE,
  HOME_ROUTE,
  SETTINGS,
  UNMATCHED_ROUTE,
} from '@constants/links';
import { CalculatorCC } from '@pages/Calculator';
import { SettingsCC } from '@pages/Settings';

const appRoutes = [
  {
    path: UNMATCHED_ROUTE,
    element: <Navigate to={HOME_CC_ROUTE} replace />,
  },
  {
    path: HOME_ROUTE,
    element: <CalculatorCC />,
  },
  {
    path: SETTINGS,
    element: <SettingsCC />,
  },
];

export default appRoutes;

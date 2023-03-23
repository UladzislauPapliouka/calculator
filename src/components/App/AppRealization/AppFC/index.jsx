import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';

import { HeaderFC } from '@components/Header';
import {
  HOME_FC_ROUTE,
  HOME_ROUTE,
  SETTINGS,
  UNMATCHED_ROUTE,
} from '@constants/links';
import { CalculatorFC } from '@pages/Calculator';
import { SettingsFC } from '@pages/Settings';
import { clearHistory, enterSymbol } from '@store/reducers/calculatorSlice';

const AppFC = () => {
  const { displayValue, lastExpression, isHistoryOpen } = useSelector(
    (state) => ({
      displayValue: state.calculator.expression,
      lastExpression: state.calculator.lastExpression,
      isHistoryOpen: state.calculator.isHistoryOpen,
    }),
  );
  const dispatch = useDispatch();
  const handleEnterSymbol = useCallback((symbol) => {
    dispatch(enterSymbol({ symbol }));
  }, []);
  const handleClearHistory = useCallback(() => {
    dispatch(clearHistory());
  }, []);
  const appRoutes = [
    {
      path: UNMATCHED_ROUTE,
      element: <Navigate to={HOME_FC_ROUTE} replace />,
    },
    {
      path: HOME_ROUTE,
      element: (
        <CalculatorFC
          handleEnterSymbol={handleEnterSymbol}
          displayValue={displayValue}
          lastExpression={lastExpression}
          isHistoryOpen={isHistoryOpen}
        />
      ),
    },
    {
      path: SETTINGS,
      element: <SettingsFC handleClearHistory={handleClearHistory} />,
    },
  ];

  return (
    <>
      <HeaderFC />
      <Routes>
        {appRoutes.map(({ path, element }) => (
          <Route path={path} element={element} />
        ))}
      </Routes>
    </>
  );
};

export default AppFC;

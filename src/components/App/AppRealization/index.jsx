import React, { useCallback } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';

import { HeaderCC, HeaderFC } from '@components/Header';
import {
  HOME_CC_ROUTE,
  HOME_FC_ROUTE,
  HOME_ROUTE,
  SETTINGS,
  UNMATCHED_ROUTE,
} from '@constants/links';
import { CalculatorCC, CalculatorFC } from '@pages/Calculator';
import { SettingsCC, SettingsFC } from '@pages/Settings';
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

class ClassAppWithoutStore extends React.Component {
  handleEnterSymbol = (symbol) => {
    const { EnterSymbol } = this.props;
    EnterSymbol(symbol);
  };

  handleClearHistory = () => {
    const { ClearHistory } = this.props;
    ClearHistory();
  };

  render() {
    const appRoutes = [
      {
        path: UNMATCHED_ROUTE,
        element: <Navigate to={HOME_CC_ROUTE} replace />,
      },
      {
        path: HOME_ROUTE,
        element: (
          <CalculatorCC
            handleEnterSymbol={this.handleEnterSymbol}
            displayValue={this.props.displayValue}
            lastExpression={this.props.lastExpression}
            isHistoryOpen={this.props.isHistoryOpen}
          />
        ),
      },
      {
        path: SETTINGS,
        element: <SettingsCC handleClearHistory={this.handleClearHistory} />,
      },
    ];
    return (
      <>
        <HeaderCC />
        <Routes>
          {appRoutes.map(({ path, element }) => (
            <Route path={path} element={element} />
          ))}
        </Routes>
      </>
    );
  }
}
const AppCC = connect(
  (state) => ({
    displayValue: state.calculator.expression,
    lastExpression: state.calculator.lastExpression,
    isHistoryOpen: state.calculator.isHistoryOpen,
  }),
  (dispatch) => ({
    EnterSymbol(symbol) {
      dispatch(enterSymbol({ symbol }));
    },
    ClearHistory() {
      dispatch(clearHistory());
    },
  }),
)(ClassAppWithoutStore);
export { AppCC, AppFC };

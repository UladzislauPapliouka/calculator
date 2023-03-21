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
  const { displayValue, lastExpression } = useSelector((state) => ({
    displayValue: state.calculator.expression,
    lastExpression: state.calculator.lastExpression,
  }));
  const dispatch = useDispatch();
  const handleEnterSymbol = useCallback((symbol) => {
    dispatch(enterSymbol({ symbol }));
  }, []);
  const handleClearHistory = useCallback(() => {
    dispatch(clearHistory());
  }, []);

  return (
    <>
      <HeaderFC />
      <Routes>
        <Route
          path={UNMATCHED_ROUTE}
          element={<Navigate to={HOME_FC_ROUTE} replace />}
        />
        <Route
          path={HOME_ROUTE}
          element={
            <CalculatorFC
              handleEnterSymbol={handleEnterSymbol}
              displayValue={displayValue}
              lastExpression={lastExpression}
            />
          }
        />
        <Route
          path={SETTINGS}
          element={<SettingsFC handleClearHistory={handleClearHistory} />}
        />
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
    const {
      props: { displayValue, lastExpression },
      handleEnterSymbol,
      handleClearHistory,
    } = this;
    return (
      <>
        <HeaderCC />
        <Routes>
          <Route
            path={UNMATCHED_ROUTE}
            element={<Navigate to={HOME_CC_ROUTE} replace />}
          />
          <Route
            path={HOME_ROUTE}
            element={
              <CalculatorCC
                handleEnterSymbol={handleEnterSymbol}
                displayValue={displayValue}
                lastExpression={lastExpression}
              />
            }
          />
          <Route
            path={SETTINGS}
            element={<SettingsCC handleClearHistory={handleClearHistory} />}
          />
        </Routes>
      </>
    );
  }
}
const AppCC = connect(
  (state) => ({
    displayValue: state.calculator.expression,
    lastExpression: state.calculator.lastExpression,
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

import React from 'react';
import { connect } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';

import { HeaderCC } from '@components/Header';
import {
  HOME_CC_ROUTE,
  HOME_ROUTE,
  SETTINGS,
  UNMATCHED_ROUTE,
} from '@constants/links';
import { CalculatorCC } from '@pages/Calculator';
import { SettingsCC } from '@pages/Settings';
import { clearHistory, enterSymbol } from '@store/reducers/calculatorSlice';

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

export default AppCC;

import React, { useCallback } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { HeaderCC, HeaderFC } from '@components/Header';
import { CalculatorCC, CalculatorFC } from '@pages/Calculator';
import { SettingsCC, SettingsFC } from '@pages/Settings';
import { clearHistory, enterSymbol } from '@store/reducers/calculatorSlice';

const AppFC = () => {
  const displayValue = useSelector((state) => state.calculator.expression);
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
        <Route path={'/*'} element={<Navigate to="/func/home" replace />} />
        <Route
          path="/home"
          element={
            <CalculatorFC
              handleEnterSymbol={handleEnterSymbol}
              displayValue={displayValue}
            />
          }
        />
        <Route
          path="/settings"
          element={<SettingsFC handleClearHistory={handleClearHistory} />}
        />
      </Routes>
    </>
  );
};

class ClassAppWithoutStore extends React.Component {
  handleEnterSymbol = (symbol) => {
    this.props.EnterSymbol(symbol);
  };

  handleClearHistory = () => {
    this.props.ClearHistory();
  };

  render() {
    const { props } = this;
    return (
      <>
        <HeaderCC />
        <Routes>
          <Route path={'/*'} element={<Navigate to="/class/home" replace />} />
          <Route
            path="/home"
            element={
              <CalculatorCC
                handleEnterSymbol={this.handleEnterSymbol}
                displayValue={props.displayValue}
              />
            }
          />
          <Route
            path="/settings"
            element={
              <SettingsCC handleClearHistory={this.handleClearHistory} />
            }
          />
        </Routes>
      </>
    );
  }
}
const AppCC = connect(
  (state) => ({
    displayValue: state.calculator.expression,
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

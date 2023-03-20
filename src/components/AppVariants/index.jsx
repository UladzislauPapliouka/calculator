import React, { useCallback } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { HeaderCC, HeaderFC } from '@components/Header';
import { ClassCalculator, FuncCalculator } from '@pages/Calculator';
import { ClassSettings, FuncSettings } from '@pages/Settings';
import { clearHistory, enterSymbol } from '@store/reducers/displaySlice';

const FuncApp = () => {
  const displayValue = useSelector((state) => state.display.expression);
  const history = useSelector((state) => state.display.history);
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
            <FuncCalculator
              handleEnterSymbol={handleEnterSymbol}
              history={history}
              displayValue={displayValue}
            />
          }
        />
        <Route
          path="/settings"
          element={<FuncSettings handleClearHistory={handleClearHistory} />}
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
              <ClassCalculator
                handleEnterSymbol={this.handleEnterSymbol}
                history={props.state.display.history}
                displayValue={props.state.display.expression}
              />
            }
          />
          <Route
            path="/settings"
            element={
              <ClassSettings handleClearHistory={this.handleClearHistory} />
            }
          />
        </Routes>
      </>
    );
  }
}
const ClassApp = connect(
  (state) => ({ state }),
  (dispatch) => ({
    EnterSymbol(symbol) {
      dispatch(enterSymbol({ symbol }));
    },
    ClearHistory() {
      dispatch(clearHistory());
    },
  }),
)(ClassAppWithoutStore);
export { ClassApp, FuncApp };

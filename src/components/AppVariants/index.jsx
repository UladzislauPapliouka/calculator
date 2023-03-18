import React, { useEffect, useRef, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { HeaderCC, HeaderFC } from '@components/Header';
import { ClassCalculator, FuncCalculator } from '@pages/Calculator';
import { ClassSettings, FuncSettings } from '@pages/Settings';
import Calc from '@utils/calculator';

const FuncApp = () => {
  const [displayValue, setDisplayValue] = useState('');
  const [history, setHistory] = useState([]);
  const calcRef = useRef();
  const handleEnterSymbol = (symbol) => {
    setDisplayValue(calcRef.current.EnterSymbol(symbol));
    setHistory(calcRef.current.getHistory());
  };
  const handleClearHistory = () => {
    calcRef.current.clearHistory();
    setHistory(calcRef.current.getHistory());
  };
  useEffect(() => {
    calcRef.current = new Calc();
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

class ClassApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayValue: '',
      history: [],
    };
    this.calcRef = React.createRef();
  }

  componentDidMount() {
    this.calcRef.current = new Calc();
  }

  handleEnterSymbol = (symbol) => {
    const newDisplayValue = this.calcRef.current.EnterSymbol(symbol);
    this.setState(() => ({
      displayValue: newDisplayValue,
      history: this.calcRef.current.getHistory(),
    }));
  };

  handleClearHistory = () => {
    this.calcRef.current.clearHistory();
    this.setState(() => ({
      history: this.calcRef.current.getHistory(),
    }));
  };

  render() {
    const { state } = this;
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
                history={state.history}
                displayValue={state.displayValue}
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

export { ClassApp, FuncApp };

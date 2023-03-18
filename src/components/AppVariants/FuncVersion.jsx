import React, { useEffect, useRef, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { HeaderFC } from '@components/Header';
import { FuncCalculator } from '@pages/Calculator';
import { FuncSettings } from '@pages/Settings';
import Calc from '@utils/calculator';

const App = () => {
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

export default App;

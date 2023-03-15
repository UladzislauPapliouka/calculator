import React, { useEffect, useRef, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { FuncHeader } from '@components/Header';
import { FuncCalculator } from '@pages/Calculator';
import { FuncSettings } from '@pages/Settings';
import Calc from '@utils/calculator';

const App = () => {
  const [displayValue, setDisplayValue] = useState('');
  const [history, setHistory] = useState([]);
  const calcRef = useRef();
  const onEnterSymbol = (symbol) => {
    setDisplayValue(calcRef.current.EnterSymbol(symbol));
    setHistory(calcRef.current.getHistory());
  };
  useEffect(() => {
    calcRef.current = new Calc();
  }, []);

  return (
    <div className="App">
      <FuncHeader />
      <Routes>
        <Route path={'/*'} element={<Navigate to="/func/home" replace />} />
        <Route
          path="/home"
          element={
            <FuncCalculator
              onEnterSymbol={onEnterSymbol}
              history={history}
              displayValue={displayValue}
            />
          }
        />
        <Route path="/settings" element={<FuncSettings />} />
      </Routes>
    </div>
  );
};

export default App;

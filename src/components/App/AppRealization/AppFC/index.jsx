import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import appRoutes from '@components/App/AppRealization/AppFC/config';
import { HeaderFC } from '@components/Header';
import { clearHistory, enterSymbol } from '@store/reducers/calculatorSlice';

const AppFC = () => {
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
        {appRoutes.map(({ path, element }) => (
          <Route path={path} element={element} />
        ))}
      </Routes>
    </>
  );
};

export default AppFC;

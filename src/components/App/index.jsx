import React, { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from '@/globalStyles';
import ErrorBoundary from '@components/ErrorBoudaries';
import mainRoutes from '@constants/routes';
import fontWeight from '@constants/styles/fontWeight';
import opacity from '@constants/styles/opacity';
import * as sizes from '@constants/styles/sizes';
import themes from '@constants/theme';
import ThemeContext from '@constants/themeContext';
import { chooseTheme } from '@store/reducers/themeSlice';

const App = () => {
  const currentTheme = useSelector(({ theme }) => theme.themeName);
  const dispatch = useDispatch();
  const setCurrentTheme = (theme) => {
    dispatch(chooseTheme({ theme }));
  };
  const handleThemeChange = useCallback(({ target: { value } }) => {
    setCurrentTheme(value);
  }, []);
  const themeContextValue = useMemo(
    () => ({ theme: currentTheme, toggleTheme: handleThemeChange }),
    [currentTheme, handleThemeChange],
  );

  return (
    <HashRouter>
      <ThemeContext.Provider value={themeContextValue}>
        <ThemeProvider
          theme={{ ...themes[currentTheme], sizes, opacity, fontWeight }}
        >
          <GlobalStyles />
          <ErrorBoundary>
            <Routes>
              {mainRoutes.map(({ path, element }) => (
                <Route key={`route-${path}`} path={path} element={element} />
              ))}
            </Routes>
          </ErrorBoundary>
        </ThemeProvider>
      </ThemeContext.Provider>
    </HashRouter>
  );
};

export default App;

import React, { useCallback, useMemo, useState } from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Route, Routes } from 'react-router-dom';
import ErrorBoundary from '@components/ErrorBoudaries';
import mainRoutes from '@constants/routes';
import fontWeight from '@constants/styles/fontWeight';
import opacity from '@constants/styles/opacity';
import * as sizes from '@constants/styles/sizes';
import themes from '@constants/theme';
import ThemeContext from '@constants/themeContext';
import store from '@store';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from '@/globalStyles';

const App = () => {
  const [currentTheme, setCurrentTheme] = useState('dark');
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

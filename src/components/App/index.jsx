import React, { useCallback, useMemo, useState } from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Route, Routes } from 'react-router-dom';
import ErrorBoundary from '@components/ErrorBoudaries';
import mainRoutes from '@constants/routes';
import { ThemeContext, themes } from '@constants/theme';
import store from '@store';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from '@/globalStyles';

const App = () => {
  const [currentTheme, setCurrentTheme] = useState('dark');
  const handleThemeChange = useCallback((event) => {
    setCurrentTheme(event.target.value);
  }, []);
  const themeContextValue = useMemo(
    () => ({ theme: currentTheme, toggleTheme: handleThemeChange }),
    [currentTheme, handleThemeChange],
  );
  return (
    <HashRouter>
      <ErrorBoundary>
        <ThemeContext.Provider value={themeContextValue}>
          <ThemeProvider theme={themes[currentTheme]}>
            <GlobalStyles />
            <Provider store={store}>
              <Routes>
                {mainRoutes.map(({ path, element }) => (
                  <Route key={`route-${path}`} path={path} element={element} />
                ))}
              </Routes>
            </Provider>
          </ThemeProvider>
        </ThemeContext.Provider>
      </ErrorBoundary>
    </HashRouter>
  );
};
export default App;

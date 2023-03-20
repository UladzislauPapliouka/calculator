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
  const [themeName, setThemeName] = useState('dark');
  const handleThemeChange = useCallback((event) => {
    setThemeName(event.target.value);
  }, []);
  const themeContextValue = useMemo(
    () => ({ theme: themeName, toggleTheme: handleThemeChange }),
    [themeName, handleThemeChange],
  );
  return (
    <HashRouter>
      <ErrorBoundary>
        <ThemeContext.Provider value={themeContextValue}>
          <ThemeProvider theme={themes[themeName]}>
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

import React, { useMemo, useState } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ErrorBoundary from '@components/ErrorBoudaries';
import mainRoutes from '@constants/routes';
import { ThemeContext, themes } from '@constants/theme';
import store from '@store';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from '@/globalStyles';

const App = () => {
  const [themeName, setThemeName] = useState('dark');
  const handleThemeChange = (event) => {
    setThemeName(event.target.value);
  };
  const themeContextValue = useMemo(
    () => ({ theme: themeName, toggleTheme: handleThemeChange }),
    [themeName, handleThemeChange],
  );
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <ThemeContext.Provider value={themeContextValue}>
          <ThemeProvider theme={themes[themeName]}>
            <GlobalStyles />
            <Provider store={store}>
              <Routes>
                {mainRoutes.map(({ path, element }) => (
                  <Route path={path} element={element} />
                ))}
              </Routes>
            </Provider>
          </ThemeProvider>
        </ThemeContext.Provider>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default App;

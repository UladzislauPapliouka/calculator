import React, { useMemo, useState } from 'react';
import { Provider } from 'react-redux';
import ErrorBoundary from '@components/ErrorBoudaries';
import { ThemeContext, themes } from '@constants/theme';
import store from '@store';
import * as PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from '@/globalStyles';

const Decorator = ({ children }) => {
  const [themeName, setThemeName] = useState('dark');
  const chooseTheme = (event) => {
    setThemeName(event.target.value);
  };
  const themeContextValue = useMemo(
    () => ({ theme: themeName, toggleTheme: chooseTheme }),
    [themeName, chooseTheme],
  );
  return (
    <ErrorBoundary>
      <ThemeContext.Provider value={themeContextValue}>
        <ThemeProvider theme={themes[themeName]}>
          <GlobalStyles />
          <Provider store={store}>{children}</Provider>
        </ThemeProvider>
      </ThemeContext.Provider>
    </ErrorBoundary>
  );
};
Decorator.defaultProps = {
  children: () => {},
};
Decorator.propTypes = {
  children: PropTypes.func,
};
export default Decorator;

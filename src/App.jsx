import React, { useMemo, useState } from 'react';
import { Provider } from 'react-redux';
import Error from '@components/Error';
import ErrorBoundary from '@components/ErrorBoudaries';
import { ThemeContext, themes } from '@constants/theme';
import store from '@store';
import * as PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

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
    <ErrorBoundary errorFallback={<Error />}>
      <ThemeContext.Provider value={themeContextValue}>
        <ThemeProvider theme={themes[themeName]}>
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

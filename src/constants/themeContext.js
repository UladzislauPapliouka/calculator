import { createContext } from 'react';

const initialContext = {
  theme: 'light',
  toggleTheme: () => {},
};
const ThemeContext = createContext(initialContext);
export default ThemeContext;

import { createContext } from 'react';

const lightTheme = {
  headerColor: '#ffffff',
  headerBackground: '#434343',
  mainColor: '#000000',
  bordersColor: '#707070',
  keysBackground: '#F2F2F2',
  keysHover: '#d5d5d5',
  keysActive: '#c9c9c9',
  mainBackground: '#ffffff',
  scrollbarColor: '#434343',
};
const darkTheme = {
  headerColor: '#ffffff',
  headerBackground: '#121212',
  mainColor: '#ffffff',
  bordersColor: '#707070',
  keysBackground: '#201E2A',
  keysHover: '#18151e',
  keysActive: '#131118',
  mainBackground: '#17151F',
  scrollbarColor: '#ffffff',
};
const themes = {
  light: lightTheme,
  dark: darkTheme,
};
const initialContext = {
  theme: 'light',
  toggleTheme: () => {},
};
const ThemeContext = createContext(initialContext);
export { ThemeContext, themes };

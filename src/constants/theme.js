import { createContext } from 'react';
import colors from '@constants/styles/colors';

const lightTheme = {
  headerColor: colors.white,
  headerBackground: colors.gray43,
  mainColor: colors.black,
  bordersColor: colors.gray70,
  keysBackground: colors.whiteF2,
  keysHover: colors.whiteD5,
  keysActive: colors.whiteC9,
  mainBackground: colors.white,
  scrollbarColor: colors.gray43,
};
const darkTheme = {
  headerColor: colors.white,
  headerBackground: colors.darkGray,
  mainColor: colors.white,
  bordersColor: colors.gray70,
  keysBackground: colors.darkBlue,
  keysHover: colors.darkBlue30,
  keysActive: colors.darkBlue80,
  mainBackground: colors.darkBlue,
  scrollbarColor: colors.white,
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

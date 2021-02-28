import Sugar from 'react-native-sugar-style';
import { Appearance } from 'react-native';

const commonTheme = {
  font: {
    s: 10,
    m: 18,
    l: 24,
  },
  opacity: {
    fade: 0.7,
    half: 0.4,
  },
  borderRadius: {
    s: 4,
    m: 10,
  },
  black: '#2b2b2b',
};

export const lightTheme = {
  ...commonTheme,
  name: 'light',
  background: '#f5f5f5',
  surface: '#e9e9e9',
  text: '#2b2b2b',
  primary: '#feca57',
  secondary: '#13c8f9',
  border: '#A1A9B1',
  slider: '#222f3e',
  icon: '#222f3e',
};

export const darkTheme = {
  ...commonTheme,
  name: 'dark',
  background: '#2b2b2b',
  surface: '#111',
  secondary: '#61dafb',
  text: '#f5f5f5',
  primary: '#feca57',
  border: '#A1A9B1',
  slider: '#888',
  icon: '#cccccc',
};

const isDark = Appearance.getColorScheme() === 'dark';
const theme = isDark ? darkTheme : lightTheme;

export const { StyleSheet, ThemeProvider, useTheme } = Sugar(theme);
export default StyleSheet;

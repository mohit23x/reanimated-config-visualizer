import Sugar from 'react-native-sugar-style';

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
  secondary: '#ff9ff3',
  border: '#A1A9B1',
  slider: '#222f3e',
  icon: '#222f3e',
};

export const darkTheme = {
  ...commonTheme,
  name: 'dark',
  background: '#2b2b2b',
  surface: '#111',
  secondary: '#ff9ff3',
  text: '#f5f5f5',
  primary: '#feca57',
  border: '#A1A9B1',
  slider: '#888',
  icon: '#cccccc',
};

export const { StyleSheet, ThemeProvider, useTheme } = Sugar(darkTheme);
export default StyleSheet;

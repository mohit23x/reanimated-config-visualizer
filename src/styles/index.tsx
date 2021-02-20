import Sugar from 'react-native-sugar-style';

const commonTheme = {
  opacity: {
    fade: 0.9,
    half: 0.4,
  },
  black: '#000000',
  white: '#fbfbfb',
};

const lightTheme = {
  ...commonTheme,
  background: '',
  surface: '',
  text: '',
  primary: '',
  secondary: '',
};

const darkTheme = {
  ...commonTheme,
  background: '#f8f8f8',
  surface: '#ccc',
  text: '#2b2b2b',
  primary: '#ff0000',
  secondary: '#ff0',
};

export type Theme = typeof darkTheme;
export const { StyleSheet, ThemeProvider, useTheme } = Sugar<Theme>(darkTheme);
export default StyleSheet;

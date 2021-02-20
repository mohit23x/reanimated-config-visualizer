import * as React from 'react';
import { View, ViewStyle } from 'react-native';
import { StyleSheet } from 'src/styles';

type Props = {
  style?: ViewStyle;
  children?: React.ReactNode | React.ReactNode[];
};

export const Container = ({ style, ...props }: Props) => {
  return <View style={[s.container, style]} {...props} />;
};

export const Section = ({ style, ...props }: Props) => {
  return <View style={[s.section, style]} {...props} />;
};

const s = StyleSheet.create((theme, constants) => ({
  container: {
    flex: 1,
    flexDirection: ['column-reverse', 'row'],
    backgroundColor: theme.background,
  },
  section: {
    flex: 1,
    maxHeight: [constants.height / 2, constants.height],
  },
}));

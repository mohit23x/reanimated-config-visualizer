import * as React from 'react';
import {
  TouchableOpacity,
  View,
  ViewStyle,
  Text,
  TextStyle,
} from 'react-native';
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

export const Divider = () => {
  return <View style={s.divider} />;
};

export const Button = ({
  onPress,
  style,
  title,
  textStyle,
}: {
  onPress: () => any;
  style?: ViewStyle;
  textStyle?: TextStyle;
  title: string;
}) => {
  return (
    <TouchableOpacity style={[s.btn, style]} onPress={onPress}>
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

const s = StyleSheet.create((theme) => ({
  container: {
    flex: 1,
    flexDirection: ['column-reverse', 'row'],
    backgroundColor: theme.background,
    paddingHorizontal: [undefined, undefined, 100],
  },
  section: {
    flex: 1,
    marginVertical: [undefined, undefined, '5%'],
  },
  divider: {
    height: 1,
    width: '100%',
    backgroundColor: theme.border,
  },
  btn: {
    height: 50,
    maxWidth: 200,
    minWidth: 100,
    borderRadius: theme.borderRadius.m,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.secondary,
    marginHorizontal: 10,
    alignSelf: 'center',
    marginVertical: 5,
  },
}));

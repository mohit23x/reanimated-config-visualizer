import * as React from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';
import { StyleSheet } from 'src/styles';

const ASSETS = [{ title: 'FlatIcon', url: 'https://www.flaticon.com/' }];

const TECH = [
  { title: 'React Native', url: 'https://reactnative.dev/' },
  { title: 'Expo', url: 'https://expo.io/' },
  {
    title: 'React Native Reanimated',
    url: 'https://docs.swmansion.com/react-native-reanimated/',
  },
  {
    title: 'React Native Web',
    url: 'https://necolas.github.io/react-native-web/',
  },
  {
    title: 'React Native Redash',
    url: 'https://github.com/wcandillon/react-native-redash',
  },
  {
    title: '@react-native-community/slider',
    url: 'https://github.com/callstack/react-native-slider',
  },
  {
    title: '@react-native-picker/picker',
    url: 'https://www.npmjs.com/package/@react-native-community/picker',
  },
  {
    title: 'React Native Svg',
    url: 'react-native-svg',
  },
  {
    title: 'React Native Sugar Style',
    url: 'https://github.com/mohit23x/react-native-sugar-style',
  },
];

const Link = ({ title, url }: { title: string; url: string }) => {
  const onPress = () => {
    Linking.canOpenURL(url).then(() => {
      return Linking.openURL(url);
    });
  };

  return (
    <TouchableOpacity
      style={{
        padding: 5,
      }}
      onPress={onPress}
    >
      <Text style={s.label}>{title}</Text>
    </TouchableOpacity>
  );
};

export const Attribution = () => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
      }}
    >
      <Text style={s.label}>The assets were taken from</Text>
      {ASSETS.map((d) => (
        <Link key={d.url} {...d} />
      ))}
      <Text style={s.title}>Made with some amazing technologies</Text>

      {TECH.map((d) => (
        <Link key={d.title} title={d.title} url={d.url} />
      ))}
    </View>
  );
};

const s = StyleSheet.create((theme) => ({
  title: {
    color: theme.text,
    fontWeight: 'bold',
    fontSize: theme.font.m,
    textAlign: 'center',
    marginVertical: 5,
  },
  label: {
    color: theme.text,
  },
}));

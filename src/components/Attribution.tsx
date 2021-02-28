import * as React from 'react';
import { View, Text } from 'react-native';
import { StyleSheet } from 'src/styles';
import { H1, A } from '@expo/html-elements';

const GithubURL = 'https://github.com/mohit23x/reanimated-config-visualizer';

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
  return (
    <A
      style={{
        paddingVertical: 2,
        color: StyleSheet.theme.secondary,
      }}
      href={url}
      target="_blank"
    >
      {title}
    </A>
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
      <Text style={s.label}>
        Thanks to <Link title="Flaticon" url="https://www.flaticon.com/" /> for
        the assets
      </Text>

      <H1 style={s.title}>Made with</H1>

      {TECH.map((d) => (
        <Link key={d.title} title={d.title} url={d.url} />
      ))}

      <H1 style={s.title}>Open source</H1>
      <Text style={s.label}>Made with ❤️ by Mohit23x</Text>
      <Text style={s.label}>
        source available at <Link title="Github" url={GithubURL} />
      </Text>
    </View>
  );
};

const s = StyleSheet.create((theme) => ({
  title: {
    color: theme.text,
    fontWeight: 'bold',
    fontSize: theme.font.m,
    textAlign: 'center',
    marginVertical: 2,
    paddingTop: 10,
  },
  label: {
    color: theme.text,
  },
}));

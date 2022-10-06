import React from 'react';
import { Linking, Platform, TouchableOpacity, View } from 'react-native';
import Github from '../assets/Github';

export function GithubIcon() {
  const handleGithubIconPress = () => {
    Linking.openURL('https://github.com/mohit23x/reanimated-config-visualizer');
  };

  if (Platform.OS !== 'web') return null;

  return (
    <TouchableOpacity
      onPress={handleGithubIconPress}
      style={{ position: 'absolute', top: 0, right: 0, bottom: 0 }}
    >
      <Github />
    </TouchableOpacity>
  );
}

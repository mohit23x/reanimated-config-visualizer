import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { SafeAreaView } from 'react-native';
import { HomeScreen } from 'src/screen/HomeScreen';
import { ThemeProvider, StyleSheet } from 'src/styles';

export default function App() {
  return (
    <SafeAreaView style={s.safeArea}>
      <StatusBar hidden />
      <ThemeProvider>
        <HomeScreen />
      </ThemeProvider>
    </SafeAreaView>
  );
}

const s = StyleSheet.create((theme) => ({
  safeArea: {
    flex: 1,
    backgroundColor: theme.background,
  },
}));

import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import { HomeScreen } from 'src/screen/HomeScreen';
import { ThemeProvider } from 'src/styles';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar hidden />
      <ThemeProvider>
        <HomeScreen />
      </ThemeProvider>
    </SafeAreaView>
  );
}

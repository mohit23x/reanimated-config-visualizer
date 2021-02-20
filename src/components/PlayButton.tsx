import * as React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { StyleSheet } from 'src/styles';

export const PlayButton = ({ onPress, title, animating, stopAnimation }) => {
  const handlePress = () => {
    if (animating) {
      stopAnimation();
    } else {
      onPress();
    }
  };
  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={[s.container, {}]}>
        <Text>{animating ? 'stop' : 'play'}</Text>
      </View>
    </TouchableOpacity>
  );
};

const s = StyleSheet.create(() => ({
  container: {
    height: 40,
    width: 200,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    marginBottom: 10,
  },
}));

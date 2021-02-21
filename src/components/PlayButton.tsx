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

  const activeOpacity = 0.6;

  const opacity = animating ? activeOpacity : 1;

  return (
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <TouchableOpacity
        activeOpacity={activeOpacity}
        style={[s.container, { opacity }]}
        onPress={handlePress}
      >
        <Text style={[s.text, { opacity }]}>{animating ? 'STOP' : 'PLAY'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const s = StyleSheet.create((theme) => ({
  container: {
    height: 50,
    minWidth: 220,
    flex: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.primary,
    marginBottom: 10,
    marginHorizontal: 5,
  },
  text: {
    fontWeight: 'bold',
    letterSpacing: 2,
  },
}));

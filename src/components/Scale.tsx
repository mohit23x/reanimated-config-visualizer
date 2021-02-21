import * as React from 'react';
import { View } from 'react-native';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import { StyleSheet } from 'src/styles';

export const Scale = ({ x, backgroundColor }) => {
  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ scale: x.value }],
    };
  });

  return (
    <View style={[s.circleBorder]}>
      <Animated.View style={[s.circle, { backgroundColor }, animatedStyles]} />
    </View>
  );
};

const s = StyleSheet.create((theme, constants) => ({
  circle: {
    height: 180,
    width: 180,
    backgroundColor: theme.primary,
    opacity: theme.opacity.fade,
    borderRadius: 100,
  },
  circleBorder: {
    borderWidth: 2,
    borderColor: theme.border,
    borderRadius: 100,
  },
}));

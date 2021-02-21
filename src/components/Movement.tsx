import * as React from 'react';
import { View } from 'react-native';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import { StyleSheet } from 'src/styles';

export const Movement = ({ x, backgroundColor }) => {
  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: x.value * 100 }],
    };
  });

  return (
    <View style={s.boxBorder}>
      <Animated.View style={[s.box, { backgroundColor }, animatedStyles]} />
    </View>
  );
};

const s = StyleSheet.create((theme, constants) => ({
  box: {
    height: [100, 150],
    width: [120, 200],
    backgroundColor: theme.primary,
    opacity: theme.opacity.fade,
    margin: -50,
  },
  boxBorder: {
    height: [100, 150],
    width: [120, 200],
    borderWidth: 2,
    borderColor: theme.border,
    alignItems: 'center',
  },
}));

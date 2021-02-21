import * as React from 'react';
import { View } from 'react-native';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import { StyleSheet } from 'src/styles';

export const Rotate = ({ x, backgroundColor }) => {
  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${x.value * 30}deg` }],
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
    height: 180,
    width: 180,
    backgroundColor: theme.primary,
    opacity: theme.opacity.fade,
  },
  boxBorder: {
    borderWidth: 2,
    borderColor: theme.border,
  },
}));

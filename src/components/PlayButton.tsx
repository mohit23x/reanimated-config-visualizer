import * as React from 'react';
import { StyleSheet } from 'src/styles';
import { Button } from './ui';

const activeOpacity = 0.6;

export const PlayButton = ({
  onPress,
  animating,
  stopAnimation,
}: {
  onPress: () => void;
  animating: boolean;
  stopAnimation: () => void;
}) => {
  const handlePress = () => (animating ? stopAnimation() : onPress());

  const opacity = animating ? activeOpacity : 1;

  return (
    <Button
      onPress={handlePress}
      style={{ ...s.btn, opacity }}
      title={animating ? 'STOP' : 'PLAY'}
    />
  );
};

const s = StyleSheet.create({
  btn: {
    backgroundColor: StyleSheet.theme.primary,
    minWidth: 220,
    flex: 1,
  },
  text: {
    fontWeight: 'bold',
    letterSpacing: 2,
  },
});

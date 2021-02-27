import * as React from 'react';
import { StyleSheet } from 'src/styles';
import { Button } from './ui';

const activeOpacity = 0.6;

export const PlayButton = ({ onPress }: { onPress: () => void }) => {
  const handlePress = () => onPress();

  return (
    <Button
      onPress={handlePress}
      style={s.btn}
      textStyle={s.text}
      title={'PLAY'}
    />
  );
};

const s = StyleSheet.create({
  btn: {
    backgroundColor: StyleSheet.theme.primary,
    minWidth: 220,
  },
  text: {
    fontWeight: 'bold',
    letterSpacing: 2,
  },
});

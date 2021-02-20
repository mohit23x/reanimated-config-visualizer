import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet } from 'src/styles';
import { PlayButton } from './PlayButton';

export const Actions = ({ onPress, title, animating, stopAnimation }) => {
  return (
    <View>
      <PlayButton
        animating={animating}
        onPress={onPress}
        title="play"
        stopAnimation={stopAnimation}
      />
    </View>
  );
};

const styles = StyleSheet.create((theme) => ({}));

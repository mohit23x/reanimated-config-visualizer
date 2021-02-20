import * as React from 'react';
import { View, Text, ScrollView, Button, Alert } from 'react-native';
import { StyleSheet, useTheme } from 'src/styles';
import Animated, {
  cancelAnimation,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  Easing,
} from 'react-native-reanimated';
import { InputSection } from 'src/components/InputSection';
import { Container } from 'src/components/ui';
import { OutputSection } from 'src/components/OutputSection';
import { PlayButton } from 'src/components';
import type { ActionTypes, InitStateType } from 'src/types';

const TYPES = [1, 2, 3, 4, 5, 6, 7, 8];
type Props = {};

export const initState = {
  damping: 12,
  mass: 1,
  stiffness: 150,
  overshootClamping: false,
  restSpeedThreshold: 0.001,
  restDisplacementThreshold: 0.001,
  velocity: 0,
};

const reducer = (state: typeof initState, action: ActionTypes) => {
  switch (action.type) {
    case 'SET':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

/*

const config = {
  damping: 28,
  mass: 0.3,
  stiffness: 188.296,
  overshootClamping: false,
  toValue: value,
  restSpeedThreshold: 0.001,
  restDisplacementThreshold: 0.001,
};


      damping: 12,
      mass: 1,
      stiffness: 150,
      overshootClamping: false,
      restSpeedThreshold: 0.001,
      restDisplacementThreshold: 0.001,
      toValue: snapPoint,


  damping: 10,
  mass: 1,
  stiffness: 100,
  velocity: 100,

*/

export const HomeScreen = ({}: Props) => {
  const x = useSharedValue(0);

  const [state, dispatch] = React.useReducer(reducer, initState);
  const [animating, setAnimating] = React.useState(false);
  useTheme();

  const handleChange = (payload: Partial<InitStateType>) => {
    dispatch({ type: 'SET', payload });
  };

  const animationCompleted = () => setAnimating(false);

  const stopAnimation = () => {
    cancelAnimation(x);
    x.value = x.value >= 0.5 ? 1 : 0;
    animationCompleted();
  };

  const onPress = () => {
    setAnimating(true);
    cancelAnimation(x);
    console.log(x.value);
    x.value = withSpring(x.value === 0 ? 1 : 0, state, () =>
      runOnJS(animationCompleted)()
    );
  };

  return (
    <>
      <Container>
        <InputSection
          animating={animating}
          onPress={onPress}
          state={state}
          handleChange={handleChange}
          stopAnimation={stopAnimation}
        />
        <OutputSection x={x} />
      </Container>
    </>
  );
};

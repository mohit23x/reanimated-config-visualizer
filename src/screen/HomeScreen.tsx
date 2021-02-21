import * as React from 'react';
import {
  Modal,
  View,
  Text,
  TextInput,
  ScrollView,
  Button,
  Alert,
} from 'react-native';
import { StyleSheet, useTheme } from 'src/styles';
import Animated, {
  cancelAnimation,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  Easing,
  useAnimatedRef,
  useDerivedValue,
  useAnimatedProps,
} from 'react-native-reanimated';
import { InputSection } from 'src/components/InputSection';
import { Container, Divider } from 'src/components/ui';
import { OutputSection } from 'src/components/OutputSection';
import { PlayButton } from 'src/components';
import { ReText } from 'react-native-redash';
import type { ActionTypes, InitStateType } from 'src/types';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TYPES = [1, 2, 3, 4, 5, 6, 7, 8];
type Props = {};

const DEFAULT_CONFIG = {
  damping: 12,
  mass: 1,
  stiffness: 150,
  velocity: 0,
};

export const initState = DEFAULT_CONFIG;

const reducer = (state: typeof initState, action: ActionTypes) => {
  switch (action.type) {
    case 'SET':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const HomeScreen = ({}: Props) => {
  const x = useSharedValue(0);
  const [state, dispatch] = React.useReducer(reducer, initState);
  const [animating, setAnimating] = React.useState(false);
  const [show, setShow] = React.useState(false);
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
        <OutputSection x={x} stopAnimation={stopAnimation} />
      </Container>
    </>
  );
};

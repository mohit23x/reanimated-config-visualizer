import * as React from 'react';
import { useEffect, useReducer } from 'react';
import { Platform } from 'react-native';
import {
  cancelAnimation,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import { InputSection } from 'src/components/InputSection';
import { OutputSection } from 'src/components/OutputSection';
import { Container } from 'src/components/ui';
import {
  AnimationTypes,
  ConfigType,
  DefaultState,
  KEYS,
  SPRING_CONFIG,
  StateType,
  TIMING_CONFIG,
} from 'src/constants';
import { useTheme } from 'src/styles';
import type { ActionTypes } from 'src/types';
import { Helmet } from 'react-helmet';

const reducer = (state: StateType, action: ActionTypes): StateType => {
  switch (action.type) {
    case 'SET_ANIMATION':
      return {
        ...state,
        animationType: action.payload,
        config: action.payload === 'spring' ? SPRING_CONFIG : TIMING_CONFIG,
      };
    case 'SET_CONFIG':
      return { ...state, config: { ...state.config, ...action.payload } };
    default:
      return state;
  }
};

export const HomeScreen = () => {
  const x = useSharedValue(0);
  const [state, dispatch] = useReducer<
    (state: StateType, actions: ActionTypes) => StateType
  >(reducer, DefaultState);
  useTheme();

  const handleChange = (payload: Partial<ConfigType>) => {
    dispatch({ type: 'SET_CONFIG', payload });
  };

  const handleAnimationType = (payload: AnimationTypes) => {
    dispatch({ type: 'SET_ANIMATION', payload });
  };

  const stopAnimation = () => {
    cancelAnimation(x);
    x.value = x.value >= 0.5 ? 1 : 0;
  };

  const onPlay = () => {
    cancelAnimation(x);
    if (state.animationType === 'timing') {
      // @ts-expect-error
      x.value = withTiming(x.value === 0 ? 1 : 0, state.config);
    } else {
      // @ts-expect-error
      x.value = withSpring(x.value === 0 ? 1 : 0, state.config);
    }
  };

  useEffect(() => {
    if (Platform.OS === 'web') {
      document.body.onkeyup = (e) => (KEYS.includes(e.code) ? onPlay() : null);
    }
  }, []);

  return (
    <>
      {Platform.OS === 'web' ? (
        <Helmet>
          <title>Reanimated 2 Config Visualizer</title>
          <meta
            name="description"
            content="Reanimated 2 Config Visualizer works on expo and web made by mohit23x"
          />
        </Helmet>
      ) : null}

      <Container>
        <InputSection
          onPlay={onPlay}
          state={state}
          handleChange={handleChange}
          handleAnimationType={handleAnimationType}
        />
        <OutputSection x={x} stopAnimation={stopAnimation} />
      </Container>
    </>
  );
};

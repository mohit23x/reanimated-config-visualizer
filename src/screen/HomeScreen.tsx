import * as React from 'react';
import { useState, useReducer } from 'react';
import {
  cancelAnimation,
  runOnJS,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import { InputSection } from 'src/components/InputSection';
import { Container } from 'src/components/ui';
import { OutputSection } from 'src/components/OutputSection';
import type { ActionTypes } from 'src/types';
import {
  AnimationTypes,
  ConfigType,
  DefaultState,
  SPRING_CONFIG,
  StateType,
  TIMING_CONFIG,
} from 'src/constants';
import { useTheme } from 'src/styles';

const reducer = (state: StateType, action: ActionTypes) => {
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
  const [state, dispatch] = useReducer(reducer, DefaultState);
  useTheme();

  const handleChange = (payload: Partial<ConfigType>) => {
    console.log('pay: ', payload);
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
    // setAnimating(true);
    cancelAnimation(x);
    if (state.animationType === 'timing') {
      x.value = withTiming(x.value === 0 ? 1 : 0, state.config);
    } else {
      x.value = withSpring(x.value === 0 ? 1 : 0, state.config);
    }
  };

  return (
    <>
      <Container>
        <InputSection
          onPlay={onPlay}
          state={state}
          handleChange={handleChange}
          stopAnimation={stopAnimation}
          handleAnimationType={handleAnimationType}
        />
        <OutputSection x={x} stopAnimation={stopAnimation} />
      </Container>
    </>
  );
};

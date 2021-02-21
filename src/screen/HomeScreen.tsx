import * as React from 'react';
import {
  cancelAnimation,
  runOnJS,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { InputSection } from 'src/components/InputSection';
import { Container, Divider } from 'src/components/ui';
import { OutputSection } from 'src/components/OutputSection';
import type { ActionTypes, InitStateType } from 'src/types';
import { ConfigType, DEFAULT_CONFIG } from 'src/constants';
import { useTheme } from 'src/styles';

export const initState = DEFAULT_CONFIG;

const reducer = (state: ConfigType, action: ActionTypes) => {
  switch (action.type) {
    case 'SET':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const HomeScreen = () => {
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
        <OutputSection x={x} stopAnimation={stopAnimation} />
      </Container>
    </>
  );
};

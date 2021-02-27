import Animated from 'react-native-reanimated';
import { DefaultStateType } from 'src/screen/HomeScreen';
import { AnimationTypes, ConfigType } from 'src/constants';

export type InitStateType = typeof DefaultStateType;

type SetConfigType = {
  type: 'SET_CONFIG';
  payload: Partial<ConfigType>;
};

type SetAnimationType = {
  type: 'SET_ANIMATION';
  payload: AnimationTypes;
};

export type ActionTypes = SetConfigType | SetAnimationType;

export type AnimationCompProps = {
  x: Animated.SharedValue<number>;
  backgroundColor: string;
};

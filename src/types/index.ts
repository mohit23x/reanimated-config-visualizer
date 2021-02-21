import Animated from 'react-native-reanimated';
import { initState } from 'src/screen/HomeScreen';

export type InitStateType = typeof initState;

export type ActionTypes = { type: 'SET'; payload?: any };
export type AnimationCompProps = {
  x: Animated.SharedValue<number>;
  backgroundColor: string;
};

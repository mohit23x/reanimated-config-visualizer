import { Easing } from 'react-native-reanimated';
import MoveIcon from 'src/assets/Move';
import RotateIcon from 'src/assets/Rotate';
import ScaleIcon from 'src/assets/Scale';
import { Movement, Rotate, Scale } from 'src/components';

// ============= spring config =============

export const SPRING_CONFIG = {
  damping: 10,
  mass: 1,
  stiffness: 100,
  velocity: 1,
};

export const DEFAULT_MAX_LIMIT = {
  damping: 14,
  mass: 5,
  stiffness: 300,
  velocity: 100,
} as const;

export type LimitType = typeof DEFAULT_MAX_LIMIT;

export const Step = {
  damping: 0.5,
  mass: 0.1,
  stiffness: 1,
  velocity: 1,
};

export type SpringConfigType = typeof DEFAULT_MAX_LIMIT;
export type SpringLimitType = typeof DEFAULT_MAX_LIMIT;

// ============= timing config ==================

export const TIMING_CONFIG: TimingConfigType = {
  duration: 1000,
  easing: Easing.linear,
};

export type TimingConfigType = {
  duration: number;
  easing: typeof Easing;
};

// ================= default state ==============

export type ConfigType = SpringConfigType | TimingConfigType;

export type StateType = {
  animationType: AnimationTypes;
  config: ConfigType;
};

export const DefaultState: StateType = {
  animationType: 'spring',
  config: SPRING_CONFIG,
};

export type AnimationTypes = 'spring' | 'timing';

// ========== output examples =============

export const examples = {
  rotate: {
    title: 'Rotate',
    component: Rotate,
    icon: RotateIcon,
    color: '#eb4d4b',
  },
  scale: {
    title: 'Scale',
    component: Scale,
    icon: ScaleIcon,
    color: '#10ac84',
  },
  movement: {
    title: 'Move',
    component: Movement,
    icon: MoveIcon,
    color: '#f368e0',
  },
};

export type ExampleKeyType = keyof typeof examples;

// ============= keyboard ==========

export const KEYS = ['Space', 'Enter', 'NumpadEnter'];

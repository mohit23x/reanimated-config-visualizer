import { Movement, Rotate, Scale } from 'src/components';
import RotateIcon from 'src/assets/Rotate';
import MoveIcon from 'src/assets/Move';
import ScaleIcon from 'src/assets/Scale';

// ============= config =============

export const DEFAULT_CONFIG = {
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
};

export const STEP = {
  damping: 0.5,
  mass: 0.1,
  stiffness: 1,
  velocity: 1,
};

export type ConfigType = typeof DEFAULT_CONFIG;
export type LimitType = typeof DEFAULT_MAX_LIMIT;

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

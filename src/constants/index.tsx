export const DEFAULT_CONFIG = {
  damping: 12,
  mass: 1,
  stiffness: 150,
  velocity: 50,
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

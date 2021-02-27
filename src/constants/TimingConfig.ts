import { Easing } from 'react-native-reanimated';
import DefinedEasing from './Easing';

export const EasingConfig = {
  linear: { config: Easing.linear, copy: 'Easing.linear' },
  ease: { config: Easing.ease, copy: 'Easing.ease' },
  quad: { config: Easing.quad, copy: 'Easing.quad' },
  cubic: { config: Easing.cubic, copy: 'Easing.cubic' },
  sin: { config: Easing.sin, copy: 'Easing.sin' },
  circle: { config: Easing.circle, copy: 'Easing.circle' },
  exp: { config: Easing.exp, copy: 'Easing.exp' },
  bounce: { config: Easing.bounce, copy: 'Easing.bounce' },
  in: { config: Easing.in, copy: 'Easing.in' },
  // out - not working
  // back - not working
  elastic: (x: number) => {
    return {
      config: Easing.elastic(x),
      copy: `Easing.elastic(${x})`,
    };
  },

  easeIn: {
    config: Easing.bezier(0.42, 0, 1, 1),
    copy: 'Easing.bezier(0.42, 0, 1, 1)',
  },
  easeOut: {
    config: Easing.bezier(0, 0, 0.58, 1),
    copy: 'Easing.bezier(0, 0, 0.58, 1)',
  },
  easeInOut: {
    config: Easing.bezier(0.42, 0, 0.58, 1),
    copy: 'Easing.bezier(0.42, 0, 0.58, 1)',
  },

  easeInCubic: {
    config: Easing.bezier(0.55, 0.055, 0.675, 0.19),
    copy: 'Easing.bezier(0.55, 0.055, 0.675, 0.19)',
  },
  easeOutCubic: {
    config: Easing.bezier(0.215, 0.61, 0.355, 1.0),
    copy: 'Easing.bezier(0.215, 0.61, 0.355, 1.0)',
  },
  easeInOutCubic: {
    config: Easing.bezier(0.645, 0.045, 0.355, 1.0),
    copy: 'Easing.bezier(0.645, 0.045, 0.355, 1.0)',
  },

  easeInCircle: {
    config: Easing.bezier(0.6, 0.04, 0.98, 0.335),
    copy: 'Easing.bezier(0.6, 0.04, 0.98, 0.335)',
  },
  easeOutCircle: {
    config: Easing.bezier(0.075, 0.82, 0.165, 1.0),
    copy: 'Easing.bezier(0.075, 0.82, 0.165, 1.0)',
  },
  easeInOutCirc: {
    config: Easing.bezier(0.785, 0.135, 0.15, 0.86),
    copy: 'Easing.bezier(0.785, 0.135, 0.15, 0.86)',
  },

  easeInExpo: {
    config: Easing.bezier(0.95, 0.05, 0.795, 0.035),
    copy: 'Easing.bezier(0.95, 0.05, 0.795, 0.035)',
  },
  easeOutExpo: {
    config: Easing.bezier(0.19, 1.0, 0.22, 1.0),
    copy: 'Easing.bezier(0.19, 1.0, 0.22, 1.0)',
  },
  easeInOutExpo: {
    config: Easing.bezier(1.0, 0.0, 0.0, 1.0),
    copy: 'Easing.bezier(1.0, 0.0, 0.0, 1.0)',
  },

  easeInQuad: {
    config: Easing.bezier(0.55, 0.085, 0.68, 0.53),
    copy: 'Easing.bezier(0.55, 0.085, 0.68, 0.53)',
  },
  easeOutQuad: {
    config: Easing.bezier(0.25, 0.46, 0.45, 0.94),
    copy: 'Easing.bezier(0.25, 0.46, 0.45, 0.94)',
  },
  easeInOutQuad: {
    config: Easing.bezier(0.455, 0.03, 0.515, 0.955),
    copy: 'Easing.bezier(0.455, 0.03, 0.515, 0.955)',
  },

  easeInQuart: {
    config: Easing.bezier(0.895, 0.03, 0.685, 0.22),
    copy: 'Easing.bezier(0.895, 0.03, 0.685, 0.22)',
  },
  easeOutQuart: {
    config: Easing.bezier(0.165, 0.84, 0.44, 1.0),
    copy: 'Easing.bezier(0.165, 0.84, 0.44, 1.0)',
  },
  easeInOutQuart: {
    config: Easing.bezier(0.86, 0.0, 0.07, 1.0),
    copy: 'Easing.bezier(0.86, 0.0, 0.07, 1.0)',
  },

  easeInSine: {
    config: Easing.bezier(0.47, 0.0, 0.745, 0.715),
    copy: 'Easing.bezier(0.47, 0.0, 0.745, 0.715)',
  },
  easeOutSine: {
    config: Easing.bezier(0.39, 0.575, 0.565, 1.0),
    copy: 'Easing.bezier(0.39, 0.575, 0.565, 1.0)',
  },
  easeInOutSine: {
    config: Easing.bezier(0.445, 0.05, 0.55, 0.95),
    copy: 'Easing.bezier(0.445, 0.05, 0.55, 0.95)',
  },

  easeInBack: {
    config: Easing.bezier(0.6, -0.28, 0.735, 0.045),
    copy: 'Easing.bezier(0.6, -0.28, 0.735, 0.045)',
  },
  easeOutBack: {
    config: Easing.bezier(0.175, 0.885, 0.32, 1.275),
    copy: 'Easing.bezier(0.175, 0.885, 0.32, 1.275)',
  },
  easeInOutBack: {
    config: Easing.bezier(0.68, -0.55, 0.265, 1.55),
    copy: 'Easing.bezier(0.68, -0.55, 0.265, 1.55)',
  },

  easeInElastic: (x: number) => {
    return {
      config: Easing.out(Easing.elastic(x)),
      copy: `Easing.out(Easing.elastic(${x}))`,
    };
  },

  easeOutElastic: (x: number) => {
    return {
      config: Easing.in(Easing.elastic(x)),
      copy: `Easing.in(Easing.elastic(${x}))`,
    };
  },

  easeInOutElastic: (x: number) => {
    return {
      config: Easing.inOut(Easing.out(Easing.elastic(x))),
      copy: `Easing.inOut(Easing.out(Easing.elastic(${x})))`,
    };
  },

  easeInBounce: {
    config: Easing.out(Easing.bounce),
    copy: 'Easing.out(Easing.bounce)',
  },
  easeOutBounce: {
    config: Easing.in(Easing.bounce),
    copy: 'Easing.in(Easing.bounce)',
  },
  easeInOutBounce: {
    config: Easing.inOut(Easing.out(Easing.bounce)),
    copy: 'Easing.inOut(Easing.out(Easing.bounce))',
  },
};

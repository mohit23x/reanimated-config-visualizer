import * as React from 'react';
import { View, Text, ScrollView, TransformsStyle } from 'react-native';
import { Section } from './ui';
import { StyleSheet } from 'src/styles';
import { AnimatedNumber } from 'src/components/AnimatedNumber';

// components
import { Rotate } from './Rotate';
import { Scale } from './Scale';
import { Movement } from './Movement';
import { AnimationOptions } from './AnimationOptions';

// assets
import RotateIcon from 'src/assets/Rotate';
import MoveIcon from 'src/assets/Move';
import ScaleIcon from 'src/assets/Scale';
import Animated from 'react-native-reanimated';

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

export type KeyType = keyof typeof examples;

export const renderComponent = (key: KeyType) => {
  return examples[key].component;
};

export const options = Object.keys(examples).map((d) => {
  const item = examples[d];
  return { title: item.title, icon: item.icon, key: d, color: item.color };
});

export const OutputSection = ({
  x,
  stopAnimation,
}: {
  x: Animated.SharedValue<number>;
  stopAnimation: () => void;
}) => {
  const [active, setActive] = React.useState<KeyType>('rotate');

  const toggleAnimation = (name: KeyType) => {
    stopAnimation();
    setActive(name);
  };

  const AnimationComp = renderComponent(active);

  return (
    <Section>
      <View style={s.head}>
        <Text style={s.title}>{examples[active].title}</Text>
        <AnimatedNumber x={x} />
      </View>
      <View style={s.container}>
        <View style={s.playground}>
          <AnimationComp x={x} backgroundColor={examples[active].color} />
        </View>
        <AnimationOptions
          active={active}
          options={options}
          toggleAnimation={toggleAnimation}
        />
      </View>
    </Section>
  );
};

const s = StyleSheet.create((theme, constants) => ({
  container: {
    flexDirection: ['row', 'column'],
    flex: 1,
  },
  head: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  title: {
    fontSize: theme.font.l,
    color: theme.text,
  },
  playground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    height: 180,
    width: 180,
    backgroundColor: theme.primary,
    opacity: theme.opacity.fade,
  },
  boxBorder: {
    borderWidth: 2,
    borderColor: theme.border,
  },
}));

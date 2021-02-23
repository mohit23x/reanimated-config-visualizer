import * as React from 'react';
import { View, Text } from 'react-native';
import { Section } from './ui';
import { StyleSheet } from 'src/styles';
import { AnimatedNumber } from 'src/components/AnimatedNumber';
import { AnimationOptions } from './AnimationOptions';
import Animated from 'react-native-reanimated';
import { ExampleKeyType, examples } from 'src/constants';

export const renderComponent = (key: ExampleKeyType) => {
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
  const [active, setActive] = React.useState<ExampleKeyType>('rotate');

  const toggleAnimation = (name: ExampleKeyType) => {
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

const s = StyleSheet.create((theme) => ({
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

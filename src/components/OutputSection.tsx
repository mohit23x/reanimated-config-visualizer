import * as React from 'react';
import { View } from 'react-native';
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
  running
}: {
  x: Animated.SharedValue<number>;
  stopAnimation: () => void;
  running: boolean
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
        <AnimatedNumber x={x} />
      </View>
      <View style={s.container}>
        <View style={s.playground}>
          <AnimationComp running={running} x={x} backgroundColor={examples[active].color} />
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
    justifyContent: 'flex-end',
    marginHorizontal: 10,
  },
  playground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

import * as React from 'react';
import { View, Text, ScrollView, TransformsStyle } from 'react-native';
import { Section } from './ui';
import { StyleSheet } from 'src/styles';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { AnimationOptions } from './AnimationOptions';

// assets
import RotateIcon from 'src/assets/Rotate';
import MoveIcon from 'src/assets/Move';
import ScaleIcon from 'src/assets/Scale';

export const Rotate = ({ x }) => {
  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${x.value * 30}deg` }],
    };
  });

  return (
    <View style={s.playground}>
      <View style={s.boxBorder}>
        <Animated.View style={[s.box, animatedStyles]} />
      </View>
    </View>
  );
};

export const Scale = ({ x }) => {
  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ scale: x.value }],
    };
  });

  return (
    <View style={s.playground}>
      <View style={s.boxBorder}>
        <Animated.View style={[s.box, animatedStyles]} />
      </View>
    </View>
  );
};

export const Movement = ({ x }) => {
  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: x.value * 100 }],
    };
  });

  return (
    <View style={s.playground}>
      <View style={s.vboxBorder}>
        <Animated.View style={[s.vbox, animatedStyles]} />
      </View>
    </View>
  );
};

const examples = {
  rotate: {
    title: 'Rotate',
    component: Rotate,
    icon: RotateIcon,
  },
  scale: {
    title: 'Scale',
    component: Scale,
    icon: ScaleIcon,
  },
  movement: {
    title: 'Movement',
    component: Movement,
    icon: MoveIcon,
  },
};

type KeyType = keyof typeof examples;

const renderComponent = (key) => {
  console.log('renderComponent: ', key);
  return examples[key].component;
};

const options = Object.keys(examples).map((d) => {
  const item = examples[d];
  return { title: item.title, icon: item.icon, key: d };
});

export const OutputSection = ({ x }) => {
  const [show, setShow] = React.useState<KeyType>('rotate');

  const toggleAnimation = (name: KeyType) => {
    console.log('name: ', name);
    setShow(name);
  };

  const AnimationComp = renderComponent(show);

  const renderAnimationComp = () => {
    console.log('AnimationComp: ', AnimationComp);
    return;
  };

  return (
    <Section>
      <View style={s.container}>
        <AnimationComp x={x} />
        <AnimationOptions options={options} toggleAnimation={toggleAnimation} />
      </View>
    </Section>
  );
};

const s = StyleSheet.create((theme, constants) => ({
  container: {
    flexDirection: ['row', 'column'],
    flex: 1,
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
    borderColor: theme.black,
    opacity: theme.opacity.half,
  },
  vbox: {
    height: [100, 150],
    width: 80,
    backgroundColor: theme.primary,
    opacity: theme.opacity.fade,
    margin: -50,
  },
  vboxBorder: {
    height: [100, 150],
    width: [220, 440],
    borderWidth: 2,
    borderColor: theme.black,
    opacity: theme.opacity.half,
    alignItems: 'center',
  },
}));

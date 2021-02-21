import * as React from 'react';
import { StyleSheet } from 'src/styles';
import Animated, {
  useAnimatedRef,
  useDerivedValue,
} from 'react-native-reanimated';
import { TextInput } from 'react-native';
import { ReText } from 'react-native-redash';

const FIXED = 1000;
Animated.addWhitelistedNativeProps({ text: true });
const ReTextInput = Animated.createAnimatedComponent(TextInput);

type Props = { x: Animated.SharedValue<number> };

const WebText = ({ x }) => {
  const inputAnimatedRef = useAnimatedRef();

  useDerivedValue(() => {
    if (inputAnimatedRef && inputAnimatedRef.current) {
      inputAnimatedRef.current.setNativeProps({
        text: (Math.floor(x.value * FIXED) / FIXED).toString(),
      });
    }
  });

  return (
    <ReTextInput defaultValue="ad" ref={inputAnimatedRef} style={s.text} />
  );
};

const NativeText = ({ x }) => {
  const animatedText = useDerivedValue(() =>
    (Math.floor(x.value * FIXED) / FIXED).toString()
  );

  return <ReText text={animatedText} style={s.text} />;
};

export const AnimatedNumber = ({ x }: Props) => {
  if (StyleSheet.constants.os.web) {
    return <WebText x={x} />;
  }

  return <NativeText x={x} />;
};

const s = StyleSheet.create((theme, constants) => ({
  text: {
    color: theme.text,
  },
}));

import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { StyleSheet } from 'src/styles';
import RNSlider from '@react-native-community/slider';
import { InitStateType } from 'src/types';

export const Slider = ({
  value,
  stateKey,
  handleChange,
  minimumValue = 0,
  maximumValue = 100,
  step = 1,
}: {
  value: number | undefined;
  stateKey: keyof InitStateType;
  minimumValue?: number;
  maximumValue?: number;
  step?: number;
  handleChange: (a: Partial<InitStateType>) => void;
}) => {
  const [val, setVal] = React.useState(value);

  const handleFinalValue = () => {
    handleChange({ [stateKey]: val });
  };

  const handleValueChange = (e: number) => {
    const newVal = Math.floor(e * 100) / 100;
    setVal(newVal);
  };

  return (
    <View style={s.container}>
      <View style={s.textContainer}>
        <Text style={s.label}>{stateKey}:</Text>
        <Text style={s.value}>{val}</Text>
      </View>
      <RNSlider
        minimumValue={minimumValue}
        maximumValue={maximumValue}
        step={step}
        value={value}
        onValueChange={handleValueChange}
        onSlidingComplete={handleFinalValue}
        minimumTrackTintColor={StyleSheet.theme.slider}
        maximumTrackTintColor="#808080"
        thumbTintColor={StyleSheet.theme.slider}
        style={s.slider}
      />
    </View>
  );
};

const s = StyleSheet.create((theme, constants) => ({
  container: {
    marginVertical: 5,
    width: 300,
  },
  slider: {
    width: '100%',
    height: 30,
  },
  textContainer: {
    flexDirection: 'row',
  },
  label: {
    color: theme.text,
  },
  value: {
    marginLeft: 6,
    fontWeight: 'bold',
    color: theme.text,
  },
}));

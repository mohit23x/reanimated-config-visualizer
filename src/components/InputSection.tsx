import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Section } from './ui';
import { StyleSheet } from 'src/styles';
import Slider from '@react-native-community/slider';
import { InitStateType } from 'src/types';
import { PlayButton } from './PlayButton';
import { Actions } from './Actions';

export const Config = ({
  title,
  value,
  stateKey,
  handleChange,
  minimumValue = 0,
  maximumValue = 100,
  step = 1,
}: {
  title: string;
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
    <View style={s.sliderContainer}>
      <View style={s.textContainer}>
        <Text style={s.label}>{title}:</Text>
        <Text style={s.value}>{val}</Text>
      </View>
      <Slider
        minimumValue={minimumValue}
        maximumValue={maximumValue}
        step={step}
        value={value}
        onValueChange={handleValueChange}
        onSlidingComplete={handleFinalValue}
        style={s.slider}
      />
    </View>
  );
};

export const Select = ({
  title,
  data = [],
  onValueChange,
}: {
  title?: string;
  data?: Array<{ label: any; value: any }>;
  onValueChange?: any;
}) => {
  return (
    <>
      <Text>{title}</Text>
      <View style={s.pickerContainer}>
        <Picker onValueChange={onValueChange} mode="dialog" style={s.picker}>
          {data.map((d) => (
            <Picker.Item label={d.label} value={d.value} />
          ))}
        </Picker>
      </View>
    </>
  );
};

export const InputSection = ({
  onPress,
  state,
  handleChange,
  animating,
  stopAnimation,
}) => {
  return (
    <Section style={s.section}>
      <Select title={'Preset'} />
      <Config
        title="Damping"
        stateKey="damping"
        value={state.damping}
        handleChange={handleChange}
        maximumValue={10}
        step={0.5}
      />
      <Config
        title="Mass"
        stateKey="mass"
        value={state.mass}
        handleChange={handleChange}
        maximumValue={5}
        step={0.1}
      />
      <Config
        title="Stiffness"
        stateKey="stiffness"
        value={state.stiffness}
        handleChange={handleChange}
        maximumValue={300}
      />
      <Config
        title="Velocity"
        stateKey="velocity"
        value={state.velocity}
        handleChange={handleChange}
        maximumValue={100}
      />
      <Actions
        animating={animating}
        onPress={onPress}
        title="play"
        stopAnimation={stopAnimation}
      />
    </Section>
  );
};

const s = StyleSheet.create((theme, constants) => ({
  section: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  picker: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    height: '100%',
    color: theme.text,
  },
  pickerContainer: {
    height: 40,
    width: '70%',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: theme.text,
    backgroundColor: theme.background,
  },
  sliderContainer: {
    marginVertical: 5,
    width: 300,
  },
  slider: {
    width: '100%' || 300,
    height: 30,
  },
  textContainer: {
    flexDirection: 'row',
  },
  label: {},
  value: {
    marginLeft: 6,
    fontWeight: 'bold',
  },
}));

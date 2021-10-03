import { P } from '@expo/html-elements';
import * as React from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import { ExampleKeyType } from 'src/constants';
import { StyleSheet } from 'src/styles';

export const Option = ({
  option,
  toggleAnimation,
  active,
}: {
  option: any;
  active: ExampleKeyType;
  toggleAnimation: (name: ExampleKeyType) => void;
}) => {
  const Icon = option.icon;

  const activeColor =
    active === option.key ? option.color : StyleSheet.theme.icon;

  return (
    <TouchableOpacity onPress={() => toggleAnimation(option.key)}>
      <View style={s.outputOption}>
        <Icon
          fill={activeColor}
          // height={30}
          // width={30}
          style={s.svg}
        />
        <P style={[s.outputText, { color: activeColor }]}>{option.title}</P>
      </View>
    </TouchableOpacity>
  );
};

export const AnimationOptions = ({
  options,
  toggleAnimation,
  active,
}: {
  options: any;
  toggleAnimation: (name: ExampleKeyType) => void;
  active: ExampleKeyType;
}) => {
  return (
    <View style={s.container}>
      <ScrollView
        contentContainerStyle={s.scroll}
        horizontal={StyleSheet.constants.width > 480 ? true : false}
      >
        {options.map((option) => (
          <Option
            key={option.title}
            option={option}
            toggleAnimation={toggleAnimation}
            active={active}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const s = StyleSheet.create((theme) => ({
  container: {
    maxWidth: [60, undefined, undefined],
    maxHeight: [undefined, 70],
    marginHorizontal: 8,
    marginVertical: [0, 10],
  },
  scroll: {
    backgroundColor: theme.surface,
    flexGrow: 1,
    justifyContent: 'space-evenly',
    paddingHorizontal: [8, undefined],
    paddingVertical: [undefined, 8],
    borderRadius: theme.borderRadius.m,
  },
  outputOption: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  svg: {
    height: 30,
    width: 30,
  },
  outputText: {
    fontSize: 12,
    marginVertical: 5,
    fontWeight: 'bold',
  },
}));

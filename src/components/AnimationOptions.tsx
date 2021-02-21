import * as React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'src/styles';

export const Option = ({
  option,
  toggleAnimation,
  active,
}: {
  option: any;
  toggleAnimation: (a: any) => void;
  active: boolean;
}) => {
  const Icon = option.icon;

  const activeColor =
    active === option.key ? option.color : StyleSheet.theme.icon;

  return (
    <TouchableOpacity onPress={() => toggleAnimation(option.key)}>
      <View style={s.outputOption}>
        <Icon fill={activeColor} style={{ transform: [{ scale: 0.7 }] }} />
        <Text style={[s.outputText, { color: activeColor }]}>
          {option.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export const AnimationOptions = ({ options, toggleAnimation, active }) => {
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

const s = StyleSheet.create((theme, constants) => ({
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
    paddingHorizontal: 2,
    borderRadius: 18,
  },
  outputOption: {
    height: [60, 70],
    width: [60, 100],
    marginHorizontal: [0, 10],
    marginVertical: [8, 0],
    alignItems: 'center',
  },
  outputText: {
    fontSize: 12,
    marginBottom: 5,
    fontWeight: 'bold',
  },
}));

import * as React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'src/styles';

export const Option = ({ option, toggleAnimation }) => {
  const Icon = option.icon;

  return (
    <TouchableOpacity onPress={() => toggleAnimation(option.key)}>
      <View style={s.outputOption}>
        <Icon fill="#000" style={{ transform: [{ scale: 0.7 }] }} />
        <Text style={s.outputText}>{option.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export const AnimationOptions = ({ options, toggleAnimation }) => {
  return (
    <View style={s.animationTypeContainer}>
      <ScrollView
        contentContainerStyle={s.scroll}
        horizontal={StyleSheet.constants.width > 480 ? true : false}
      >
        {options.map((option) => (
          <Option
            key={option.title}
            option={option}
            toggleAnimation={toggleAnimation}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const s = StyleSheet.create((theme, constants) => ({
  container: {
    flexDirection: ['row', 'column'],
    flex: 1,
  },
  animationTypeContainer: {
    maxWidth: [80, undefined, undefined],
    backgroundColor: 'blue',
    maxHeight: [undefined, 100],
  },
  scroll: {
    backgroundColor: theme.surface,
    flexGrow: 1,
    justifyContent: 'space-evenly',
    paddingHorizontal: 2,
  },
  outputOption: {
    height: [70, 100],
    width: [80, 100],
    marginHorizontal: [0, 20],
    marginVertical: [20, 0],
    alignItems: 'center',
  },
  outputText: {
    color: 'black',
    fontSize: 12,
    marginBottom: 5,
  },
}));

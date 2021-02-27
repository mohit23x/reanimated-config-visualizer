import * as React from 'react';
import {
  FlatList,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { StyleSheet } from 'src/styles';
import { AnimationTypes } from 'src/constants';
import Timing from 'src/assets/Timing';
import Spring from 'src/assets/Spring';

const Chip = ({ title, onPress, active, Icon }) => {
  const { theme } = StyleSheet;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        s.chipContainer,
        { backgroundColor: active ? StyleSheet.theme.primary : 'transparent' },
        {
          borderColor: active
            ? StyleSheet.theme.surface
            : StyleSheet.theme.border,
        },
      ]}
    >
      <View style={s.circle}>
        <Icon style={s.icon} fill={active ? theme.black : theme.border} />
      </View>

      <Text
        style={[s.chipTitle, { color: active ? theme.black : theme.border }]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export const Tabs = ({
  handleAnimationType,
  active,
}: {
  handleAnimationType: (a: AnimationTypes) => void;
  active: AnimationTypes;
}) => {
  return (
    <View style={s.head}>
      <Chip
        onPress={() => handleAnimationType('spring')}
        title="Spring"
        active={active === 'spring'}
        Icon={Spring}
      />
      <Chip
        onPress={() => handleAnimationType('timing')}
        title="Timing"
        active={active === 'timing'}
        Icon={Timing}
      />
    </View>
  );
};

const s = StyleSheet.create((theme) => ({
  head: {
    flexDirection: 'row',
    width: '100%',
    alignSelf: 'flex-start',
    marginHorizontal: 10,
    marginBottom: 10,
    justifyContent: ['flex-start', 'center'],
  },
  headBox: {
    flex: 1,
    // backgroundColor: 'red',
    textAlign: 'center',
    paddingVertical: 10,
    marginHorizontal: 3,
  },
  headTitle: {
    color: theme.text,
    textAlign: 'center',
  },
  chipContainer: {
    // borderWidth: 1,
    borderColor: theme.primary,
    marginRight: 15,
    borderRadius: 100,
    flexDirection: 'row',
    height: 30,
    alignItems: 'center',
    overflow: 'hidden',
  },
  chipTitle: {
    paddingRight: 15,
    paddingLeft: 8,
  },
  circle: {
    height: 30,
    width: 30,
    backgroundColor: theme.background + '40',
    alignSelf: 'flex-start',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    height: 20,
    width: 20,
  },
}));

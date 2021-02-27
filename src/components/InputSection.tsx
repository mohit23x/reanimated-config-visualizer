import * as React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button, Section } from './ui';
import { Actions } from './Actions';
import { Slider } from './Slider';
import { SettingModal } from './SettingModal';
import { StyleSheet } from 'src/styles';
import { ActionTypes, InitStateType } from 'src/types';
import {
  AnimationTypes,
  ConfigType,
  DEFAULT_MAX_LIMIT,
  LimitType,
  SpringConfigType,
  SpringLimitType,
  StateType,
  Step,
} from 'src/constants';
import { ScrollView, View, Text } from 'react-native';
import { Tabs } from './Tabs';
import { withTiming } from 'react-native-reanimated';
import { Select } from './Select';
import Easing from 'src/constants/Easing';
import { EasingConfig } from 'src/constants/TimingConfig';
import Clipboard from 'expo-clipboard';
import { WithTiming } from './WithTiming';
import { WithSprings } from './WithSpring';

const persistConfig = (payload: SpringLimitType) => {
  AsyncStorage.setItem('config', JSON.stringify(payload));
};

const reducer = (
  state: SpringLimitType = DEFAULT_MAX_LIMIT,
  action: ActionTypes
) => {
  switch (action.type) {
    case 'SET_CONFIG':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const InputSection = ({
  onPlay,
  state,
  stopAnimation,
  handleChange,
  handleAnimationType,
}: {
  state: StateType;
  onPlay: () => void;
  stopAnimation: () => void;
  handleChange: (a: Partial<ConfigType>) => void;
  handleAnimationType: (a: AnimationTypes) => void;
}) => {
  const [LIMIT, dispatch] = React.useReducer(reducer, DEFAULT_MAX_LIMIT);
  const [show, setShow] = React.useState(false);

  const toggleModal = () => setShow((c) => !c);

  const getConfig = async () => {
    const data = await AsyncStorage.getItem('config');
    if (data) {
      dispatch({ type: 'SET_CONFIG', payload: JSON.parse(data) });
    } else {
      dispatch({ type: 'SET_CONFIG', payload: DEFAULT_MAX_LIMIT });
    }
  };

  const handleSave = () => {
    persistConfig(LIMIT);
    alert('saved');
  };

  const handleReset = () => {
    setConfig(DEFAULT_MAX_LIMIT);
    persistConfig(DEFAULT_MAX_LIMIT);
    alert('done');
  };

  const setConfig = (obj: Partial<ConfigType>) => {
    const payload = Object.assign({}, LIMIT, obj);
    dispatch({ type: 'SET_CONFIG', payload });
  };

  React.useEffect(() => {
    getConfig();
  }, []);

  return (
    <Section style={s.section}>
      <Tabs
        handleAnimationType={handleAnimationType}
        active={state.animationType}
      />
      {state.animationType === 'timing' && (
        <WithTiming
          handleChange={handleChange}
          config={state.config}
          onPlay={onPlay}
          handleSetting={toggleModal}
        />
      )}

      {state.animationType === 'spring' && (
        <WithSprings
          config={state.config}
          limit={LIMIT}
          step={Step}
          handleChange={handleChange}
          onPlay={onPlay}
          handleSetting={toggleModal}
        />
      )}

      <SettingModal
        toggleModal={toggleModal}
        show={show}
        limit={LIMIT}
        setConfig={setConfig}
        handleSave={handleSave}
        handleReset={handleReset}
      />
    </Section>
  );
};

const s = StyleSheet.create({
  section: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    // backgroundColor: 'green',
  },
});

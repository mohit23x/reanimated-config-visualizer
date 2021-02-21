import * as React from 'react';
import { Section } from './ui';
import { StyleSheet } from 'src/styles';
import { Actions } from './Actions';
import { Slider } from './Slider';
import { Select } from './Select';
import { Button, View, Modal, Text } from 'react-native';
import { SettingModal } from './SettingModal';
import { ActionTypes } from 'src/types';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DEFAULT_MAX_LIMIT = {
  damping: 14,
  mass: 5,
  stiffness: 300,
  velocity: 100,
};

const STEP = {
  damping: 0.5,
  mass: 0.1,
  stiffness: 1,
  velocity: 1,
};

const persistConfig = (payload) => {
  AsyncStorage.setItem('config', JSON.stringify(payload));
};

export const initState = DEFAULT_MAX_LIMIT;

const reducer = (
  state: typeof initState = DEFAULT_MAX_LIMIT,
  action: ActionTypes
) => {
  switch (action.type) {
    case 'SET':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const InputSection = ({
  onPress,
  state,
  handleChange,
  animating,
  stopAnimation,
}) => {
  const [show, setShow] = React.useState(false);
  const [LIMIT, dispatch] = React.useReducer(reducer, initState);

  const toggleModal = () => setShow((c) => !c);

  const getConfig = async () => {
    const data = await AsyncStorage.getItem('config');
    if (data) {
      dispatch({ type: 'SET', payload: JSON.parse(data) });
    } else {
      dispatch({ type: 'SET', payload: DEFAULT_MAX_LIMIT });
    }
  };

  const handleSave = () => {
    persistConfig(LIMIT);
  };

  const handleReset = () => {
    setConfig(DEFAULT_MAX_LIMIT);
    persistConfig(DEFAULT_MAX_LIMIT);
  };

  const setConfig = (obj) => {
    const payload = Object.assign({}, LIMIT, obj);
    dispatch({ type: 'SET', payload });
  };

  React.useEffect(() => {
    getConfig();
  }, []);

  return (
    <Section style={s.section}>
      {/* <Select title={'Preset'} /> */}

      <Slider
        stateKey={'damping'}
        value={state.damping}
        handleChange={handleChange}
        maximumValue={LIMIT.damping}
        step={STEP.damping}
      />
      <Slider
        stateKey={'mass'}
        value={state.mass}
        handleChange={handleChange}
        maximumValue={LIMIT.mass}
        step={STEP.mass}
      />
      <Slider
        stateKey={'stiffness'}
        value={state.stiffness}
        handleChange={handleChange}
        maximumValue={LIMIT.stiffness}
        step={STEP.stiffness}
      />
      <Slider
        stateKey={'velocity'}
        value={state.velocity}
        handleChange={handleChange}
        maximumValue={LIMIT.velocity}
        step={STEP.velocity}
      />

      <Actions
        animating={animating}
        onPress={onPress}
        stopAnimation={stopAnimation}
        handleSetting={toggleModal}
      />
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

const s = StyleSheet.create((theme, constants) => ({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  section: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
}));

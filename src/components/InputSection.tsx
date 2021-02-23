import * as React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Section } from './ui';
import { Actions } from './Actions';
import { Slider } from './Slider';
import { SettingModal } from './SettingModal';
import { StyleSheet } from 'src/styles';
import { ActionTypes, InitStateType } from 'src/types';
import { ConfigType, DEFAULT_MAX_LIMIT, LimitType, STEP } from 'src/constants';

const persistConfig = (payload: ConfigType) => {
  AsyncStorage.setItem('config', JSON.stringify(payload));
};

const reducer = (state: LimitType = DEFAULT_MAX_LIMIT, action: ActionTypes) => {
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
}: {
  onPress: () => void;
  state: ConfigType;
  animating: boolean;
  stopAnimation: () => void;
  handleChange: (a: Partial<InitStateType>) => void;
}) => {
  const [show, setShow] = React.useState(false);
  const [LIMIT, dispatch] = React.useReducer(reducer, DEFAULT_MAX_LIMIT);

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
    alert('saved');
  };

  const handleReset = () => {
    setConfig(DEFAULT_MAX_LIMIT);
    persistConfig(DEFAULT_MAX_LIMIT);
    alert('done');
  };

  const setConfig = (obj: Partial<ConfigType>) => {
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

const s = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  section: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});

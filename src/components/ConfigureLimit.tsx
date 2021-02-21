import * as React from 'react';
import { View, Switch, Text, TouchableOpacity } from 'react-native';
import { ConfigType, LimitType } from 'src/constants';
import { StyleSheet } from 'src/styles';
import { Button } from './ui';

export const ConfigureLimit = ({
  limit,
  setConfig,
  handleSave,
  handleReset,
}: {
  limit: LimitType;
  setConfig: (a: any) => void;
  handleSave: () => void;
  handleReset: () => void;
}) => {
  return (
    <View>
      <InputCounter
        value={limit.damping}
        field={'damping'}
        setConfig={setConfig}
      />
      <InputCounter value={limit.mass} field={'mass'} setConfig={setConfig} />
      <InputCounter
        value={limit.stiffness}
        field={'stiffness'}
        setConfig={setConfig}
      />
      <InputCounter
        value={limit.velocity}
        field={'velocity'}
        setConfig={setConfig}
      />

      <View style={s.btnContainer}>
        <Button title={'RESET'} onPress={handleReset} />
        <Button title={'SAVE'} onPress={handleSave} />
      </View>
    </View>
  );
};

const InputCounter = ({
  field,
  setConfig,
  value,
}: {
  field: keyof LimitType;
  setConfig: (a: any) => void;
  value: number;
}) => {
  const increase = () => {
    setConfig({ [field]: value + 2 });
  };
  const decrease = () => setConfig({ [field]: value - 2 });

  return (
    <View style={s.counterContainer}>
      <View style={{ flex: 1 }}>
        <Text style={s.label}>{field}</Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TouchableOpacity style={s.counterBtn} onPress={decrease}>
          <Text style={s.btnText}>-</Text>
        </TouchableOpacity>
        <Text style={s.counterValue}>{value}</Text>
        <TouchableOpacity style={s.counterBtn} onPress={increase}>
          <Text style={s.btnText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const s = StyleSheet.create((theme) => ({
  label: {
    color: theme.text,
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  counterBtn: {
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.surface,
    marginHorizontal: 10,
  },
  btnText: {
    fontWeight: 'bold',
    fontSize: theme.font.m,
    color: theme.text,
  },
  counterValue: {
    color: theme.text,
    minWidth: 50,
    textAlign: 'center',
  },
  btnContainer: {
    justifyContent: ['space-evenly', 'flex-end'],
    flexDirection: 'row',
    marginVertical: 10,
  },
}));

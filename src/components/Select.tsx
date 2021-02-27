import * as React from 'react';
import { View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { StyleSheet } from 'src/styles';

export const Select = ({
  title,
  data = [],
  onValueChange,
  selectedValue,
  labelFormatter = (a) => a,
}: {
  title?: string;
  data?: Array<{ label: any; value: any }>;
  onValueChange: (a: any) => void;
  selectedValue: any;
  labelFormatter?: (a: string) => string;
}) => {
  const onChange = (a) => {
    onValueChange(a);
  };

  return (
    <View style={{ width: '100%' }}>
      <Text style={s.label}>{title}</Text>
      <View style={s.pickerContainer}>
        <Picker
          onValueChange={onChange}
          mode="dialog"
          style={s.picker}
          selectedValue={selectedValue}
        >
          {data.map((d) => (
            <Picker.Item
              key={d.label}
              label={labelFormatter(d.label)}
              value={d.value}
            />
          ))}
        </Picker>
      </View>
    </View>
  );
};

const s = StyleSheet.create((theme, constants) => ({
  pickerContainer: {
    height: 40,
    width: [constants.width - 100, '100%'],
    borderWidth: 1,
    borderRadius: theme.borderRadius.m,
    overflow: 'hidden',
    borderColor: theme.text,
    backgroundColor: theme.background,
  },
  picker: {
    backgroundColor: theme.background,
    borderWidth: 0,
    height: '100%',
    color: theme.text,
  },
  label: {
    color: theme.text,
    alignSelf: 'flex-start',
    marginBottom: 5,
  },
}));

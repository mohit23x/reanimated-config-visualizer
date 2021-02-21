import * as React from 'react';
import { View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { StyleSheet } from 'src/styles';

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

const s = StyleSheet.create((theme, constants) => ({
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
}));

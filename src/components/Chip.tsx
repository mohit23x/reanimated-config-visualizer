import * as React from 'react';
import { View, Text } from 'react-native';
import { StyleSheet } from 'src/styles';

// https://stackoverflow.com/questions/59827667/how-to-implement-bezier-function-in-react-native-animation

export default function Chip = ({title="With Spring"}) => {
  return (
    <View style={s.container}>
      <Text>{title}</Text>
    </View>
  )
}

const s = StyleSheet.create(() => ({
  container: {
    
  },
  text: {

  }
}))
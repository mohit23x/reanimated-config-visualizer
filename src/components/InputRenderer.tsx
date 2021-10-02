import * as React from 'react';
import { Actions } from './Actions';
import { View } from 'react-native';

export const InputRenderer = ({ children, ...props }) => {
  return (
    <>
      <View
        style={{
          flex: 1,
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}
      >
        {children}
      </View>
      <Actions {...props} />
    </>
  );
};

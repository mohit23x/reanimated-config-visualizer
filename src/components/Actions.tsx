import * as React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { StyleSheet } from 'src/styles';
import { PlayButton } from './PlayButton';
import SettingIcon from 'src/assets/Setting';

export const Actions = ({
  onPress,
  animating,
  stopAnimation,
  handleSetting,
}: {
  onPress: () => void;
  animating: boolean;
  stopAnimation: () => void;
  handleSetting: () => void;
}) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      <View>
        <TouchableOpacity
          onPress={handleSetting}
          style={{
            height: 50,
            paddingHorizontal: 15,
            backgroundColor: StyleSheet.theme.primary,
            justifyContent: 'center',
            borderRadius: 10,
            marginRight: 5,
          }}
        >
          <SettingIcon fill={'#000'} height={30} width={30} />
        </TouchableOpacity>
      </View>
      <PlayButton
        animating={animating}
        onPress={onPress}
        title="play"
        stopAnimation={stopAnimation}
      />
    </View>
  );
};

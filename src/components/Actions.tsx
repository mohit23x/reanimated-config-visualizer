import * as React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { StyleSheet } from 'src/styles';
import { PlayButton } from './PlayButton';
import SettingIcon from 'src/assets/Setting';

export const Actions = ({
  onPress,
  animating,
  stopAnimation,
  handleSetting,
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        marginHorizontal: 20,
      }}
    >
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

const styles = StyleSheet.create((theme) => ({}));

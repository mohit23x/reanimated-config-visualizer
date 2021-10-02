import * as React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { StyleSheet } from 'src/styles';
import { PlayButton } from './PlayButton';
import SettingIcon from 'src/assets/Setting';
import CopyIcon from 'src/assets/Copy';

export const Actions = ({
  onPlay,
  handleSetting,
  handleCopy,
}: {
  onPlay: () => void;
  handleSetting: () => void;
  handleCopy: () => void;
}) => {
  const onCopyPress = () => {
    handleCopy();
    alert('🎉🎉🎉copied!🎉🎉🎉');
  };
  return (
    <View style={s.row}>
      <View>
        <TouchableOpacity onPress={handleSetting} style={s.setting}>
          <SettingIcon fill={'#000'} height={30} width={30} />
        </TouchableOpacity>
      </View>
      <PlayButton onPress={onPlay} />
      <View>
        <TouchableOpacity onPress={onCopyPress} style={s.setting}>
          <CopyIcon fill={'#000'} height={32} width={32} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const s = StyleSheet.create((theme) => ({
  row: { flexDirection: 'row', alignItems: 'center' },
  setting: {
    height: 50,
    paddingHorizontal: 15,
    backgroundColor: StyleSheet.theme.primary,
    justifyContent: 'center',
    borderRadius: theme.borderRadius.m,
    marginRight: 5,
  },
}));

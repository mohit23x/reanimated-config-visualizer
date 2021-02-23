import * as React from 'react';
import { View, Image, Modal, Switch, Text, ScrollView } from 'react-native';
import { ConfigType, LimitType } from 'src/constants';
import { darkTheme, lightTheme, StyleSheet } from 'src/styles';
import { Attribution } from './Attribution';
import { ConfigureLimit } from './ConfigureLimit';
import { Button, Divider } from './ui';

const DarkModeSetting = () => {
  const isLight = StyleSheet.theme.name === 'light';

  const toggleSwitch = () => {
    StyleSheet.build(isLight ? darkTheme : lightTheme);
  };

  return (
    <View style={s.darkModeContainer}>
      <Text style={{ color: StyleSheet.theme.text }}>Light Mode</Text>
      <Switch
        thumbColor={StyleSheet.theme.icon}
        onValueChange={toggleSwitch}
        value={isLight}
        style={{ marginRight: 10 }}
      />
    </View>
  );
};

export const SettingModal = ({
  toggleModal,
  show,
  limit,
  setConfig,
  handleReset,
  handleSave,
}: {
  show: boolean;
  limit: LimitType;
  toggleModal: () => void;
  handleReset: () => void;
  handleSave: () => void;
  setConfig: (obj: Partial<ConfigType>) => void;
}) => {
  return (
    <Modal animationType="slide" onRequestClose={toggleModal} visible={show}>
      <ScrollView style={s.container}>
        <Image
          source={{ uri: 'https://reactnative.dev/img/header_logo.svg' }}
          style={s.image}
        />
        <DarkModeSetting />
        <ConfigureLimit
          limit={limit}
          setConfig={setConfig}
          handleSave={handleSave}
          handleReset={handleReset}
        />
        <Divider />
        <Attribution />
        <Button onPress={toggleModal} title={'CLOSE'} />
      </ScrollView>
    </Modal>
  );
};

const s = StyleSheet.create((theme) => ({
  container: {
    flexGrow: 1,
    backgroundColor: theme.background,
    paddingHorizontal: 10,
  },
  darkModeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 12,
  },
  label: {
    color: theme.text,
  },
  input: {
    color: theme.text,
  },
  image: {
    height: 100,
    width: 100,
    resizeMode: 'contain',
    marginVertical: 20,
    alignSelf: 'center',
  },
}));

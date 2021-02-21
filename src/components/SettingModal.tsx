import * as React from 'react';
import {
  View,
  Image,
  Modal,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  Linking,
  ScrollView,
} from 'react-native';
import { darkTheme, lightTheme, StyleSheet } from 'src/styles';
import { Attribution } from './Attribution';
import { ConfigureLimit } from './ConfigureLimit';
import { PlayButton } from './PlayButton';
import { Button, Divider } from './ui';

const DarkModeSetting = ({ isLight, toggleSwitch }) => {
  return (
    <View style={s.darkModeContainer}>
      <Text style={{ color: StyleSheet.theme.text }}>Light Mode</Text>
      <Switch
        thumbColor={StyleSheet.theme.icon}
        ios_backgroundColor="#3e3e3e"
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
}) => {
  const [isLight, setIsLight] = React.useState(
    StyleSheet.theme.name === 'light'
  );

  const toggleSwitch = (val) => {
    setIsLight(val);
    StyleSheet.build(isLight ? darkTheme : lightTheme);
  };

  return (
    <Modal animationType="slide" onRequestClose={toggleModal} visible={show}>
      <ScrollView style={s.container}>
        <Image
          source={{ uri: 'https://reactnative.dev/img/header_logo.svg' }}
          style={{
            height: 100,
            width: 100,
            resizeMode: 'contain',
            marginVertical: 20,
            alignSelf: 'center',
          }}
        />
        <DarkModeSetting isLight={isLight} toggleSwitch={toggleSwitch} />
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
}));

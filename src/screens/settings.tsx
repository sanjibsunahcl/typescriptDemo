import * as React from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from './home';
import Header from '../components/header';

type SettingScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'settings'
>;

const SettingScreen: React.FC<SettingScreenProps> = props => {
  return (
    <View style={styles.container}>
      <Header
        title="Setting Screen"
        menuPress={() => props.navigation.openDrawer()}
      />
      <Text>Settings Screen</Text>
      {/*   <Button
        title="Go to Profile"
        onPress={() => props.navigation.push('profile')}
      /> */}
    </View>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: 'white',
  },
});

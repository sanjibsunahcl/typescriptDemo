import * as React from 'react';
import {View, Button, SafeAreaView, StyleSheet} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import Header from '../components/header';

export type RootStackParamList = {
  home: undefined;
  settings: undefined;
  profile: undefined;
};

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'home'>;

const HomeScreen: React.FC<HomeScreenProps> = props => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header title="Home Screen" />
      <View style={styles.container}>
        <Button
          title="Go to Profile"
          onPress={() => props.navigation.push('profile')}
        />
        <Button
          title="Go to Settings"
          onPress={() => props.navigation.push('settings')}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});

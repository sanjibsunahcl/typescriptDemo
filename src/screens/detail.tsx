import * as React from 'react';
import {View, StyleSheet, ImageBackground} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from './home';
import Header from '../components/header';

type SettingScreenProps = NativeStackScreenProps<RootStackParamList, 'details'>;

const DetailScreen: React.FC<SettingScreenProps> = props => {
  console.log(JSON.stringify(props.route.params));
  const {data}: any = props.route.params;
  return (
    <View style={styles.container}>
      <Header
        title={`${data.title}, ${data.releaseYear}`}
        isBackBtnVisible={true}
        menuPress={() => props.navigation.goBack()}
      />

      <ImageBackground
        source={{
          uri: data.image,
        }}
        style={styles.imgBackground}
        resizeMode="cover"
      />

      {/*   <Button
        title="Go to Profile"
        onPress={() => props.navigation.push('profile')}
      /> */}
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: 'white',
  },
  imgBackground: {
    height: '96%',
    width: '99.97%',
    alignItems: 'center',
  },
});

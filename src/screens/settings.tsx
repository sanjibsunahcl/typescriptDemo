import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from './home';
import Header from '../components/header';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {ActionCreators} from '../redux/actions';

type SettingScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'settings'
>;

interface apiData {
  title: string;
  releaseYear: string;
  image: string;
}

const SettingScreen: React.FC<SettingScreenProps> = (props: any) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    props.geApiDataAction();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const {responseData} = props;
    // console.log('item' + JSON.stringify(responseData));
    if (responseData) {
      setData(responseData.movies);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.responseData]);

  const renderMovieList = (item: apiData, index: number) => {
    // console.log('item' + JSON.stringify(item));
    return (
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() =>
          Alert.alert(JSON.stringify(item), JSON.stringify(index))
        }>
        <Text style={{fontSize: 20}}>
          {item.title}, {item.releaseYear}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <Header
        title="Listing Screen"
        menuPress={() => props.navigation.openDrawer()}
      />
      <View style={styles.subContainer}>
        {props.isLoading ? (
          <ActivityIndicator size={'large'} style={{alignSelf: 'center'}} />
        ) : (
          <FlatList
            data={data}
            // style={{height: 100}}
            keyExtractor={({id}) => id}
            renderItem={({item, index}) => renderMovieList(item, index)}
          />
        )}
      </View>
    </View>
  );
};

const mapStateToProps = (state: any) => {
  console.log('responseData nnn' + JSON.stringify(state));
  return {
    responseData: state.demo.responseData,
    isLoading: state.demo.isLoading,
  };
};
function mapDispatchToProps(dispatch: any) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: 'white',
  },
  itemContainer: {
    marginTop: 10,
    borderColor: '#234',
    borderWidth: 1,
    padding: 15,
    borderRadius: 5,
  },
  subContainer: {
    flex: 1,
    justifyContent: 'center',
    width: 350,
  },
});

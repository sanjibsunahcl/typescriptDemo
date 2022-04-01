import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ActivityIndicator,
  View,
  FlatList,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import Header from '../components/header';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from './home';

type ProfileScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'settings'
>;

interface MoviesData {
  title: string;
  releaseYear: string;
  image: string;
}

// interface UData {
//   order: any;
//   image: string;
// }

const ProfileScreen: React.FC<ProfileScreenProps> = props => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    setLoading(true);

    const imgData = [
      'http://i.ytimg.com/vi/Dwyx0h9h8zg/maxresdefault.jpg',
      'http://i.pinimg.com/736x/92/0e/25/920e258281b95fdd2383308df19be0a4.jpg',
      'http://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/323725_1100-1100x628.jpg',
      'http://preview.redd.it/fr989oxe0u951.jpg?auto=webp&s=ef404791faa93ab9a89ab70cbafb6e4b906a85f6',
      'http://th.bing.com/th/id/OIP.Uc6eZ31itjoqx71i9wQcMAHaFj?pid=ImgDet&rs=1',
    ];

    try {
      const response = await fetch('http://reactnative.dev/movies.json');
      const json = await response.json();
      // let moviesData = json.movies;
      // for (let index = 0; index < moviesData.length; index++) {
      //   moviesData[index].image = imgData[index];
      // }
      const moviesData = json.movies.map((order: any, index: number) => ({
        ...order,
        image: imgData[index],
      }));
      setData(moviesData);
      setLoading(false);
      console.log('jghdhjghjd' + JSON.stringify(moviesData));
    } catch (error) {
      console.error(error);
      setLoading(false);
    } finally {
    }
  };

  const renderMovieList = (item: MoviesData) => (
    <TouchableOpacity
      style={styles.boxStyle}
      onPress={() => props.navigation.navigate('details', {data: item})}>
      <Image
        source={{
          uri: item.image,
        }}
        style={styles.imageStyle}
      />
      <View>
        <Text style={styles.itemText}>{'Title:- ' + item.title}</Text>
        <Text style={styles.itemText}>
          {'Relaese Year:- ' + item.releaseYear}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Profile Screen"
        menuPress={() => props.navigation.openDrawer()}
      />
      <View style={{flex: 1, justifyContent: 'center'}}>
        {isLoading ? (
          <ActivityIndicator size={'large'} style={{alignSelf: 'center'}} />
        ) : (
          <FlatList
            data={data}
            keyExtractor={({id}) => id}
            renderItem={({item}) => renderMovieList(item)}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

// type Style = {
//   container: ViewStyle;
//   contentWrapper: ViewStyle;
// };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: 'white',
  },
  contentWrapper: {
    padding: 20,
  },
  boxStyle: {
    margin: 10,
    borderColor: '#234',
    borderWidth: 1,
    padding: 15,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageStyle: {
    height: 80,
    width: 80,
    borderRadius: 40,
  },
  itemText: {
    fontSize: 20,
    marginStart: 20,
    color: '#234',
    // fontWeight: 'bold',
  },
});

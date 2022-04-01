import React, {useState} from 'react';
import {View, SafeAreaView, StyleSheet, FlatList} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import Header from '../components/header';
import AddItem, {IItem} from '../components/addItem';
import Item from '../components/item';

export type RootStackParamList = {
  home: undefined;
  settings: undefined;
  profile: undefined;
  details: undefined;
};

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'home'>;

const HomeScreen: React.FC<HomeScreenProps> = props => {
  const [shoppingList, setShoppingList] = useState<IItem[]>([]);

  const onItemCLick = (item: string, index: number) => {
    console.log('hjfhdjhjdfhjb nn ' + item + ' ' + index);
    let filteredArray = shoppingList.filter(value => value.item !== item);
    // console.log('filuyewyu' + JSON.stringify(filteredArray));
    setShoppingList(filteredArray);
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header
        title="Home Screen"
        menuPress={() => props.navigation.openDrawer()}
      />
      <View style={styles.contentWrapper}>
        <AddItem
          setShoppingList={setShoppingList}
          shoppingList={shoppingList}
        />
        <FlatList
          data={shoppingList}
          keyExtractor={(item, index) => `${item.item}-${index}`}
          renderItem={({item, index}) => (
            <Item
              item={item.item}
              quantity={item.quantity}
              onclick={() => onItemCLick(item.item, index)}
            />
          )}
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
  contentWrapper: {
    padding: 20,
  },
});

import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View, FlatList} from 'react-native';
import Header from '../components/header';
import AddItem, {IItem} from '../components/addItem';
import Item from '../components/item';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from './home';

type ProfileScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'settings'
>;

const ProfileScreen: React.FC<ProfileScreenProps> = () => {
  const [shoppingList, setShoppingList] = useState<IItem[]>([]);

  const onItemCLick = (item: string, index: number) => {
    console.log('hjfhdjhjdfhjb nn ' + item + ' ' + index);
    let filteredArray = shoppingList.filter(value => value.item !== item);
    // console.log('filuyewyu' + JSON.stringify(filteredArray));
    setShoppingList(filteredArray);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Shopping List" />
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

export default ProfileScreen;

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
});

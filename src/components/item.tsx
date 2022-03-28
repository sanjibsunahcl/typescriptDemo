import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {IItem} from './addItem';
const Item: React.FC<IItem> = ({item, quantity}) => {
  return (
    <TouchableOpacity style={styles.item}>
      <Text style={styles.itemName}>{item}</Text>
      <Text style={styles.quantity}>x {quantity}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  item: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 10,
    borderColor: 'rgba(0, 0, 0, 0.2)',
  },
  itemName: {
    fontWeight: '500',
  },
  quantity: {
    padding: 6,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
  },
});
export default Item;

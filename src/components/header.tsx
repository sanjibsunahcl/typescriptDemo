import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native';
import DrawerMenuIcon from '../assets/icons/drawerMenuIcon';
interface Props {
  title: string;
  menuPress?: (event: GestureResponderEvent) => void;
}
const Header: React.FC<Props> = ({title, menuPress}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{title}</Text>
      <TouchableOpacity style={styles.menuStyle} onPress={menuPress}>
        <DrawerMenuIcon color="#234" size={30} />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cfcfcf',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  menuStyle: {
    position: 'absolute',
    left: 0,
    padding: 10,
    // alignSelf: 'flex-start',
  },
});
export default Header;

import 'react-native-gesture-handler';
import React from 'react';
import DrawerNavigation from './src/navigation/drawerNavigator';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {store} from './src/redux/stores/stores';

// import RootNavigator from './src/navigation/navigationService';
const App = () => {
  return (
    <Provider store={store}>
      <DrawerNavigation></DrawerNavigation>
    </Provider>
  );
};
export default App;

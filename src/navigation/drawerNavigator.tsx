import React from 'react';
import HomeScreen from '../screens/home';
import ProfileScreen from '../screens/profile';
import SettingScreen from '../screens/settings';
import {
  NavigationContainer,
  // NavigatorScreenParams,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import ExploreIcon from '../assets/icons/exploreIcon';
import ProfileIcon from '../assets/icons/profileIcon';
import RestaurantIcon from '../assets/icons/restaurentIcon';
import DetailScreen from '../screens/detail';

// export type RootStackParams = {
//   ExploreStack: undefined;
//   RestaurantsStack: NavigatorScreenParams<RestaurantsStackParams>;
//   Profile: undefined;
//   Restaurant: {
//     name: string;
//   };
// };

const RootStack = createDrawerNavigator();
const Stack = createNativeStackNavigator();

// export type RestaurantsStackParams = {
//   Restaurants: undefined;
//   Restaurant: {
//     name: string;
//   };
// };

// const RestaurantsStack = createNativeStackNavigator<RestaurantsStackParams>();

// const RestaurantScreenStack = () => {
//   return (
//     <RestaurantsStack.Navigator
//       initialRouteName="Restaurants"
//       screenOptions={{
//         headerShown: false,
//       }}>
//       <RestaurantsStack.Screen
//         name="Restaurants"
//         component={RestaurantsScreen}
//       />
//       <RestaurantsStack.Screen name="Restaurant" component={RestaurantScreen} />
//     </RestaurantsStack.Navigator>
//   );
// };

// export type ExploreStackParams = {
//   Explore: undefined;
//   Restaurant: {
//     name: string;
//   };
// };

// const ExploreStack = createNativeStackNavigator<ExploreStackParams>();

const ProfileStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="details" component={DetailScreen} />
    </Stack.Navigator>
  );
};

const DrawerNavigation = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName="home"
        screenOptions={({}) => ({
          headerShown: false,
          tabBarActiveTintColor: '#e67a15',
          tabBarInactiveTintColor: 'gray',
        })}>
        <RootStack.Screen
          name="home"
          component={HomeScreen}
          options={{
            drawerIcon: ({color, size}) => (
              <ExploreIcon color={color} size={size} />
            ),
            drawerLabel: 'Home',
          }}
        />

        <RootStack.Screen
          name="Profile"
          component={ProfileStack}
          options={{
            drawerIcon: ({color, size}) => (
              <ProfileIcon color={color} size={size} />
            ),
            drawerLabel: 'Profile',
          }}
        />
        <RootStack.Screen
          name="Setting"
          component={SettingScreen}
          options={{
            drawerIcon: ({color, size}) => (
              <RestaurantIcon color={color} size={size} />
            ),
            drawerLabel: 'Listing',
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigation;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home';
import Entypo from 'react-native-vector-icons/Entypo';
import HomeStack from './HomeStack';
import ShoppingCartStack from './shoppngCartStack';

const Tab = createBottomTabNavigator();

const custonIcon = (iconName: string) => {
  return {
    tabBarIcon: ({color}: {color: string}) => (
      <Entypo name={iconName} size={19} color={color} />
    ),
  };
};
const BottomTabNav = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#ffbd7d',
        tabBarInactiveTintColor: '#e47911',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          ...custonIcon('home'),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={HomeScreen}
        options={{
          ...custonIcon('home'),
        }}
      />
      <Tab.Screen
        name="ShoppingCart"
        component={ShoppingCartStack}
        options={{
          ...custonIcon('home'),
        }}
      />
      <Tab.Screen
        name="More"
        component={HomeScreen}
        options={{
          ...custonIcon('home'),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNav;

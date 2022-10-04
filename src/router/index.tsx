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
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabNav from './bottomTabNav';

const Root = createStackNavigator();
const Router = () => {
  return (
    <NavigationContainer>
      <Root.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Root.Screen name="HomeTab" component={BottomTabNav} />
      </Root.Navigator>
    </NavigationContainer>
  );
};

export default Router;

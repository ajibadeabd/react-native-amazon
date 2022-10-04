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
import {createStackNavigator} from '@react-navigation/stack';
import AddressScreenComp from '../screens/Address';
import ShoppingCartScreen from '../screens/ShoppingCart';

const Root = createStackNavigator();
const ShoppingCartStack = () => {
  return (
    <Root.Navigator>
      <Root.Screen
        name="Cart"
        options={{title: 'Shopping Cart'}}
        component={ShoppingCartScreen}
      />
      <Root.Screen
        name="Address"
        component={AddressScreenComp}
        options={{title: 'Address'}}
      />
    </Root.Navigator>
  );
};

export default ShoppingCartStack;

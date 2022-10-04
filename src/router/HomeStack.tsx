/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {Dispatch, SetStateAction, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreenComp from '../screens/Home';
import ProductScreen from '../screens/product';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TextInput} from 'react-native-gesture-handler';
import {StyleSheet} from 'react-native';

const Root = createStackNavigator();
const Header = ({
  value,
  setValue,
}: {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <SafeAreaView style={styles.rootHeader}>
      <TextInput
        onChangeText={val => {
          setValue(val);
        }}
        value={value}
        style={styles.textInput}
      />
    </SafeAreaView>
  );
};
const HomeStack = () => {
  const [value, setValue] = useState('');

  return (
    <SafeAreaView style={styles.rootHome}>
      <Root.Navigator
        screenOptions={{
          header: () => <Header value={value} setValue={setValue} />,
        }}>
        <Root.Screen name="HomeScreen" options={{title: 'Home'}}>
          {() => <HomeScreenComp searchValue={value} />}
        </Root.Screen>
        <Root.Screen name="ProductScreen" component={ProductScreen} />
      </Root.Navigator>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  rootHeader: {
    backgroundColor: '#22e3dd',
    height: 90,
    justifyContent: 'center',
  },
  rootHome: {
    flex: 1,
  },
  textInput: {
    height: 40,
    padding: 5,
    margin: 10,
    borderRadius: 3,
    marginBottom: 10,
    backgroundColor: 'white',
  },
});

export default HomeStack;

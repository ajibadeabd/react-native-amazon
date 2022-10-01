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
import {StyleSheet, Text, Image, View, FlatList} from 'react-native';
import CartProductItem from  "../../components/cartProductItem"
import products   from  "../../components/data/cart"
const HomeScreen = () => {
  return (
    <View style={styles.page}>
       <FlatList 
       data={products}
       showsVerticalScrollIndicator={false}
       renderItem={({item})=><CartProductItem cartItem={item}/>}
       />
    </View>
  );
};

const styles = StyleSheet.create({
  
  page: {
    padding: 10,
  }, 
});
export default HomeScreen;

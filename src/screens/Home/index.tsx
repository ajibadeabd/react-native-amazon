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
import ProductItem from  "../../components/product-item"
import Products   from  "../../components/data/products"
const HomeScreen = () => {
  return (
    <View style={styles.page}>
       <FlatList 
       data={Products}
       showsVerticalScrollIndicator={false}
       renderItem={({item})=><ProductItem item={item}/>}
       />
    </View>
  );
};

const styles = StyleSheet.create({
  
  page: {
    // padding: 10,
  }, 
});
export default HomeScreen;

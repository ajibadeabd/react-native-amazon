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
import {StyleSheet, View, FlatList} from 'react-native';
import ProductItem from '../../components/product-item';
import products from '../../components/data/products';
const HomeScreen = ({searchValue}: {searchValue: string}) => {
  console.log(searchValue);
  return (
    <View style={styles.page}>
      <FlatList
        data={products}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <ProductItem item={item} />}
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

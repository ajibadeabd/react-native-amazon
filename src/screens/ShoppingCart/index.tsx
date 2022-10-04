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
import {Text, View, FlatList} from 'react-native';
import ShopProductItem from '../../components/cartProductItem';
import Carts from '../../components/data/cart';
import Button from '../../components/button';
import products from '../../components/data/products';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
const ShoppingCart = () => {
  const totalPrice = Carts.reduce((summedPrice, product) => {
    return summedPrice + product.item.price * product.quantity;
  }, 0);
  const navigation: any = useNavigation();
  const onCheckout = () => {
    navigation.navigate('Address');
  };

  return (
    <View style={styles.page}>
      <FlatList
        ListHeaderComponent={() => (
          <View>
            <Text style={styles.totalItemContainer}>
              Subtotal ({products.length} items):{' '}
              <Text style={styles.totalPriceContainer}>
                {totalPrice.toFixed(2)}
              </Text>
            </Text>
            <Button
              text="Proceed to checkout"
              onPress={onCheckout}
              containerStyle={styles.button}
            />
          </View>
        )}
        data={Carts}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <ShopProductItem cartItem={item} />}
      />
    </View>
  );
};

export default ShoppingCart;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

 import React, { useState } from 'react';
 import {StyleSheet, Text, Image, View, FlatList, TextInput} from 'react-native';
 import ShopProductItem from  "../../components/cartProductItem"
 import Carts   from  "../../components/data/cart" ;
 import { Picker } from '@react-native-picker/picker';
 import CountryList from 'country-list';

const Countries = CountryList.getData()
 import styles   from  "./styles"
 const Address = () => {
    const [country, setCountry] = useState()
     const totalPrice = Carts.reduce((summedPrice,product)=>{
         return summedPrice+(product.item.price * product.quantity)
     },0)
    return (
        <View >
            <Text>address</Text>
            <View style={styles.row}>
                <Picker selectedValue={country} onValueChange={setCountry}>
                    {Countries.map((country)=> <Picker.Item value={country.code} label={country.name}/> )}
                </Picker>
            </View>
            <View>
                <Text>
                    Full name firstname and last name
                </Text>
                <TextInput  d/>
            </View>
        </View>
      );
 };
  
 export default Address;
 
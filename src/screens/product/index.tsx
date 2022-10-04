/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {Text, ScrollView} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import styles from './style';
import product from '../../components/data/product';
import Button from '../../components/button';
import ImageCarousel from '../../components/ImageCarousel';
import {ParamListBase, RouteProp, useRoute} from '@react-navigation/native';
import QuantitySelector from '../../components/QuantitySelector';
const ProductScreen = () => {
  const route: RouteProp<ParamListBase, string> = useRoute();
  const params = route?.params as {
    [x: string]: object | string | number;
  };
  const [selectedOption, setSelectedOption] = useState(
    product.options ? product.options[params.id as number] : null,
  );
  const [quantity, setQuantity] = useState(0);
  return (
    <ScrollView style={styles.root}>
      <Text>{product.title}</Text>
      <ImageCarousel images={product.images} />

      <Picker
        selectedValue={selectedOption}
        onValueChange={value => setSelectedOption(value)}>
        {product.options.map((option, index) => (
          <Picker.Item key={index} label={option} value={option} />
        ))}
      </Picker>
      <Text style={styles.price}>
        from ${product.price}
        {product.oldPrice && (
          <Text style={styles.oldPrice}> {product.oldPrice}</Text>
        )}
      </Text>
      <Text style={styles.description}>{product.description}</Text>
      <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
      <Button onPress={() => {}} text={'Add To Cart'} />
      <Button
        onPress={() => {}}
        text={'Buy Now'}
        containerStyle={styles.button}
      />
    </ScrollView>
  );
};

export default ProductScreen;

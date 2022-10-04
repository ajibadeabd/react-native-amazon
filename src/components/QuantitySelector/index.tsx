import React from 'react';
import {Text, Pressable, View} from 'react-native';
import styles from './styles';

const QuantitySelector = ({quantity, setQuantity}: any) => {
  const onPlus = () => {
    setQuantity(quantity++);
  };
  const onMinus = () => {
    setQuantity(Math.max(0, quantity--));
  };
  // const onMinus  = () =>{setQuantity(quantity===0?0:quantity--)}
  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={onMinus}>
        <Text style={styles.buttonText}>-</Text>
      </Pressable>
      <Text style={styles.quantity}>{quantity}</Text>
      <Pressable style={styles.button} onPress={onPlus}>
        <Text style={styles.buttonText}>+</Text>
      </Pressable>
    </View>
  );
};

export default QuantitySelector;

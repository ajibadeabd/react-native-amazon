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
import {Text, Pressable} from 'react-native';
import styles from './styles';

interface ButtonProps {
  text: string;
  onPress: () => void;
  containerStyle?: object;
}
const Button = ({text, onPress, containerStyle}: ButtonProps) => {
  return (
    <Pressable onPress={onPress} style={{...styles.root, ...containerStyle}}>
      <Text style={{...styles.text}}>{text}</Text>
    </Pressable>
  );
};

export default Button;

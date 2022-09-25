/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

 import React , { useState } from 'react';
 import { StyleSheet, Text, Image, View, Pressable }  from 'react-native';
 import {Picker} from '@react-native-picker/picker';
 import styles from './styles';

 interface ButtonProps {
     text:string;
     onPress:()=>void
     containerStyle?: object
 }
 const Button = ({text,onPress, containerStyle}:ButtonProps) => {

   return (
         <Pressable onPress={onPress} style = {{...styles.root,...containerStyle}}>

             <Text style = {{...styles.text}}>{text}</Text>
         </Pressable>
   );
 };

 export default Button;
 
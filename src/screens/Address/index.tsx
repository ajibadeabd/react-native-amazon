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
import {
  Text,
  View,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Button from '../../components/button';
import {Picker} from '@react-native-picker/picker';
import CountryList from 'country-list';

const Countries = CountryList.getData();
import styles from './styles';
const Address = () => {
  const [country, setCountry] = useState(Countries[0].code);
  const [input, setInput] = useState({
    fullName: ' ',
    address: ' ',
    city: ' ',
    phoneNumber: '',
  });

  const onChange = (key: string, value: string) => {
    setInput(prevObject => ({...prevObject, [key]: value}));
  };

  const onCheckout = () => {};

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 10 : 0}>
      <ScrollView style={styles.root}>
        <Text>address</Text>
        <View style={styles.row}>
          <Picker selectedValue={country} onValueChange={setCountry}>
            {Countries.map((eachCountry, index) => (
              <Picker.Item
                key={index}
                value={eachCountry.code}
                label={eachCountry.name}
              />
            ))}
          </Picker>
        </View>
        {/* full name component */}
        <View style={styles.row}>
          <Text style={styles.label}>Full name firstname and last name</Text>
          <TextInput
            placeholder="Full name"
            style={styles.input}
            value={input.fullName}
            onChangeText={(value: string) => {
              onChange('fullName', value);
            }}
          />
        </View>
        {/* phone number */}
        <View style={styles.row}>
          <Text style={styles.label}>Phone number</Text>
          <TextInput
            placeholder="Phone number"
            style={styles.input}
            value={input.phoneNumber}
            onChangeText={(value: string) => {
              onChange('phoneNumber', value);
            }}
          />
        </View>
        {/* address */}
        <View style={styles.row}>
          <Text style={styles.label}>Address</Text>
          <TextInput
            placeholder="Address"
            style={styles.input}
            value={input.address}
            onEndEditing={() => {
              console.log('finish');
            }}
            onChangeText={(value: string) => {
              onChange('address', value);
            }}
          />
        </View>
        {/* address */}
        <View style={styles.row}>
          <Text style={styles.label}>City</Text>
          <TextInput
            placeholder="City"
            style={styles.input}
            value={input.city}
            onChangeText={(value: string) => {
              onChange('city', value);
            }}
          />
        </View>
        <Button text="Checkout" onPress={onCheckout} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Address;

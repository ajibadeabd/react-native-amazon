import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'red',
  },
  root: {
    padding: 10,
    backgroundColor: 'white',
  },
  description: {
    marginVertical: 10,
    lineHeight: 20,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  oldPrice: {
    fontSize: 12,
    color: 'red',
    fontWeight: 'normal',
    textDecorationLine: 'line-through',
  },
});

export default styles;

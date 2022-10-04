/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

//  import Icon from 'react-native-vector-icons/Entypo'
//  import Icon from 'react-native-vector-icons/FontAwesome'

//  Icon.loadFont();
import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar, useColorScheme, View} from 'react-native';

import Navigation from './src/router';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Navigation />
    </View>
  );
};

export default App;

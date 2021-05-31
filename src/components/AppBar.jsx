import React from 'react';
import { View, StyleSheet} from 'react-native';
import Constants from 'expo-constants';
import Text from './Text.jsx'
const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#24292e',
    height: 56
  },
});

const AppBar = () => {
  return <View style = {styles.container}>{
    <Text style = {styles.subheadingText}>Repository</Text>}
    </View>;
};

export default AppBar;
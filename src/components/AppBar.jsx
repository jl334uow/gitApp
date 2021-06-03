import React from 'react';
import { View, StyleSheet, ScrollView} from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab.jsx';
const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#24292e',
    height: 70
  }
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal><AppBarTab/></ScrollView>
    </View>
  );
};

export default AppBar;
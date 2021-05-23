import React from 'react';
import Constants from 'expo-constants';
import { Text, StyleSheet, View } from 'react-native';
import RepositoryItem from './RepositoryItem.jsx';
import RepositoryList from './RepositoryList.jsx';
const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <Text>Rate Repository Application</Text>
      <Text>Test</Text>
      <RepositoryList>??</RepositoryList>
      <RepositoryItem/>
    </View>
  );
};

export default Main;
import React from 'react';
import {StyleSheet, View} from 'react-native';
import RepositoryList from './RepositoryList.jsx';
import AppBar from './AppBar.jsx';
const styles = StyleSheet.create({
  container: {
    flexGrow: 1
  },
});

const Main = () => {
  return (
    <View>
      <AppBar/>
      <RepositoryList/>
    </View>
  );
};

export default Main;
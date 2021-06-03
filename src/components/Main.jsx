import React from 'react';
import {StyleSheet, View} from 'react-native';
import RepositoryList from './RepositoryList.jsx';
import SignIn from './SignIn.jsx';
import {Route, Switch, Redirect} from 'react-router-native';
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
      <Switch>
        <Route path = "/repositories">
          <RepositoryList/>
        </Route>
        <Route path = "/signin">
          <SignIn/>
        </Route>
        <Redirect to = "/repositories"/>
      </Switch>
    </View>
  );
};

export default Main;
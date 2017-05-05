/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { Provider } from 'react-redux'
import { NativeRouter, Route, Link } from 'react-router-native'

import reducer from './app/reducers'

function configureStore(initialState) {
  return createStore(reducer, initialState);
}

const store = configureStore({});

export default App = () => (
  <Provider store={store}>
    <NativeRouter>
      <View style={styles.container}>
        <View style={styles.menuBox}>
          <Text>Order</Text>
        </View>
        <View style={styles.menuBox}>
          <Text>Checkout</Text>
        </View>
        <View style={styles.menuBox}>
          <Text>Request Wait Staff</Text>
        </View>
      </View>
    </NativeRouter>
  </Provider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    backgroundColor: 'steelblue',
    alignContent: 'space-around'
  },
  menuBox: {
    width: '40%',
    height: '25%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  }
});

AppRegistry.registerComponent('tablefetchclient', () => App);

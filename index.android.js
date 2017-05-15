/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
  Text,
  View
} from 'react-native';
import { Router, Route, Switch } from 'react-router'

import CardLink from './app/components/CardLink'

const mainStyles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  innerContainer: {
      width: '100%',
      height: '100%',
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'space-around'
  }
});

class MainMenuPage extends Component {
  render() {
    return (
      <Image source={require('./res/home_bg.jpg')} style={mainStyles.container}>
        <View style={mainStyles.innerContainer}>
          <CardLink to="/order" text="Order" />
          <CardLink to="/checkout" text="Checkout" />
          <CardLink to="/help" text="Request Wait Staff" />
        </View>
      </Image>
    )
  }
}

export default class tablefetchclient extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MainMenuPage />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('tablefetchclient', () => tablefetchclient);

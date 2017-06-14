import React, { Component } from 'react'
import {
  AppRegistry,
} from 'react-native'
import { Router, Route, Switch } from 'react-router'
import { NativeRouter } from 'react-router-native'
import { Provider } from 'react-redux'
import { StackNavigator } from 'react-navigation'

import HomeScreen from './app/components/HomeScreen'

import configureStore from './app/configureStore'

const routesConfig = {
  Home: { screen: HomeScreen }
}

const navigatorConfig = {
  initialRouteName: 'Home',
  headerMode: 'none'
}

const App = StackNavigator(routesConfig, navigatorConfig);

export default class tablefetchclient extends Component {
  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('tablefetchclient', () => tablefetchclient);

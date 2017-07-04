import React, { Component } from "react";
import { AppRegistry } from "react-native";
import { Router, Route, Switch } from "react-router";
import { NativeRouter } from "react-router-native";
import { Provider } from "react-redux";
import { StackNavigator } from "react-navigation";

import HomeScreen from "./app/containers/HomeScreen";
import OrderScreen from "./app/containers/OrderScreen";
import CustomizeScreen from "./app/containers/CustomizeScreen";
import CheckoutScreen from "./app/containers/CheckoutScreen";

import configureStore from "./app/configureStore";

const store = configureStore();

const routesConfig = {
  Home: { screen: HomeScreen },
  Order: { screen: OrderScreen },
  Customize: { screen: CustomizeScreen },
  Checkout: { screen: CheckoutScreen }
};

// TODO: Implement navigation via Redux instead.
const navigatorConfig = {
  initialRouteName: "Home",
  headerMode: "none"
};

const App = StackNavigator(routesConfig, navigatorConfig);

export default class tablefetchclient extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent("tablefetchclient", () => tablefetchclient);

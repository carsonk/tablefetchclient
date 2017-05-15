import React from 'react'
import { Text } from 'react-native'
import { Route } from 'react-router'
import App from './containers/App'
import MainMenuPage from './containers/MainMenuPage'

export default (props) => (
  <App history={props.history}>
    <Route exact path="/" component={MainMenuPage} />
  </App>
);

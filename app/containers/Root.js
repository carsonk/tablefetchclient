import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { NativeRouter } from 'react-router-native'
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux'
import { createMemoryHistory } from 'history'

import Routes from '../routes'
import configureStore from '../store/configureStore';

const store = configureStore();
let history = createMemoryHistory();

console.log(store);

history = syncHistoryWithStore(history, store)

class Root extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <Provider store={store}>
        <NativeRouter history={history}>
          <Routes />
        </NativeRouter>
      </Provider>
    )
  }
}

export default Root;

import React from 'react'
import { AppRegistry } from 'react-native';

import Root from './app/containers/Root';

console.log("Beginning to run!");
AppRegistry.registerComponent('tablefetchclient', () => Root);

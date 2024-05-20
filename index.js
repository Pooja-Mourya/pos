// /**
//  * @format
//  */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';
// import { Provider } from 'react-redux';
// import { Store } from './src/redux/Store';

// AppRegistry.registerComponent(appName, () => (
//   <Provider store={Store}>
//     <App />
//   </Provider>
// ));


/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import React from 'react';
import { Provider } from 'react-redux';
import { Store } from './src/redux/Store';

const ReduxApp = () => (
  <Provider store={Store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => ReduxApp);

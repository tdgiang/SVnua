/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

import SocketIO from './src/helper/SocketIO';

AppRegistry.registerComponent(appName, () => App);

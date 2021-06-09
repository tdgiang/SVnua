/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

import SocketIO from './src/helper/SocketIO';
import Room from './src/helper/Room';

<<<<<<< HEAD
AppRegistry.registerComponent(appName, () => App);
=======
AppRegistry.registerComponent(appName, () => Room);
>>>>>>> e9d70a7fc9c19750dcd151e0d0f880b0d253c725

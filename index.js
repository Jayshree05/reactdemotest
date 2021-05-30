/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import DrawerApp from './DrawerApp';
import {name as appName} from './app.json';


// 
//  AppRegistry.registerComponent(appName, () => App);  // Screen navigation
 AppRegistry.registerComponent(appName, () => DrawerApp); // Drawer 

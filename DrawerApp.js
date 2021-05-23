import React, {Component} from 'react';
import {Text, StyleSheet, Button,View, Stack,TouchableOpacity} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';

import FirstPage from './drawer/First';
import SecondPage from './drawer/Second';
// import ThirdPage from './drawer/Third';


const Drawer = createDrawerNavigator();
export default function DrawerApp() {
  return (
    <NavigationContainer>
     <Drawer.Navigator initialRouteName="Third">
        <Drawer.Screen name="First" component={FirstPage} />
        <Drawer.Screen name="Second" component={SecondPage} />
        {/* <Drawer.Screen name="Third" component={ThirdPage} /> */}
      </Drawer.Navigator>
</NavigationContainer>  );
}


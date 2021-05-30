import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer,getFocusedRouteNameFromRoute} from '@react-navigation/native';


import HomeScreen from '../pages/HomeScreen';
import ExploreScreen from '../pages/ExploreScreen';
import SettingScreen from '../pages/SettingScreen';

import NavigationDrawerStructure from '../drawer/NavigationDrawerStructure';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const getHeaderTitle = (route) => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';
    switch (routeName) {
      case 'HomeScreen':
        return 'Home';
      case 'ExploreScreen':
        return 'Explore';
        case 'BottomTabStack':
          return 'Home';
    }
  };


const BottomTabStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        style: {
          backgroundColor: '#e0e0e0',
        },
        labelStyle: {
          alignContent:'center',
          marginBottom:10,              
          textAlign: 'center',
          fontSize: 16,
        },
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home Screen',
          /*tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="home"
              color={color}
              size={size}
            />
          ),*/
        }}
      />
      <Tab.Screen
        name="ExploreScreen"
        component={ExploreScreen}
        options={{
          tabBarLabel: 'Explore Screen',
          /*tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="settings"
              color={color}
              size={size}
            />
          ),*/
        }}
      />
    </Tab.Navigator>
  );
};


const HomeScreenStack = ({navigation}) => {
    return (
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen
          name="Home"
          component={BottomTabStack}
          options={({route}) => ({
            headerTitle: getHeaderTitle(route),
            headerLeft: () => (
              <NavigationDrawerStructure
                navigationProps={navigation}
              />
            )
            ,
            headerStyle: {
              backgroundColor: '#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          })}
        />
      </Stack.Navigator>
    );
  }
  export default HomeScreenStack;
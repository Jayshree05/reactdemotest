import React, {Component} from 'react';
import {createStackNavigator,HeaderBackButton} from '@react-navigation/stack';


import NavigationDrawerStructure from '../drawer/NavigationDrawerStructure';
const Stack = createStackNavigator();


export default SettingScreenStack = ({navigation}) => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerLeft: (props) => (
            <HeaderBackButton
              {...props}
              onPress={() => {
                navigation.navigate('HomeScreen');
              }}
            />
          ),

          // headerLeft: () => (
          //   <NavigationDrawerStructure navigationProps={navigation} 
          //    />
          // ),
          headerStyle: {
            backgroundColor: '#f4511e', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}

       
        >
        <Stack.Screen
          name="SettingScreen"
          component={SettingScreen}
          options={{
            title: 'Setting', //Set Header Title
          }}
        />
      </Stack.Navigator>
    );
  }
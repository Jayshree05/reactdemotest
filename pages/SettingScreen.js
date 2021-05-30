import * as React from 'react';
import {Button, View, Text, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();


import First from '../drawer/First';
import Second from '../drawer/Second';

export default SettingScreen = ({navigation}) => {
  return (
    
    <Stack.Navigator initialRouteName="First">
      <Stack.Screen name="First" options={{headerShown:false}} component={First} />
      <Stack.Screen name="Second" options={{headerShown:false}} component={Second} />
    </Stack.Navigator>


    /*<SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 16}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            Setting Screen
          </Text>

          <Button
           onPress={
                () => navigation.navigate('Second')
              }
            title="Go to second Screen"
          />
          <Button
            onPress={() => navigation.navigate('HomeScreen')}
            title="Go to Home Screen"
          />
          <Button
            onPress={() => navigation.navigate('ExploreScreen')}
            title="Go to Explore Screen"
          />
        </View>
      
        <Text
          style={{
            fontSize: 16,
            textAlign: 'center',
            color: 'grey'
          }}>
           Setting Screen
        </Text>
      </View>
    </SafeAreaView> */
  );
};

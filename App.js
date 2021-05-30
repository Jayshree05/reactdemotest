import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import LoginForm from './screen/LoginForm';
import GridList from './screen/GridList';
import Userflatlist from './screen/Userflatlist';
import UserListView from './screen/UserListView';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';


  


//  ******* Screen navigation *******

const Stack = createStackNavigator();
function screen1({navigation}) {
  const onPressHandler = () => {
    navigation.navigate('screen2');
  };
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>screen 1</Text>
      <TouchableOpacity onPress={onPressHandler}>
        <Text style={{fontSize:18}}>Goto next screen</Text>
      </TouchableOpacity>
    </View>
  );
} 
function screen2() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>screen 2</Text>
    </View>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={screen1} />
        <Stack.Screen name="screen2" component={screen2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



// ********* UI Practice ***********

// export default class App extends Component {
//   render() {
//     return (
//        <ScrollView nestedScrollEnabled={true}>
//         <View style={{flex: 1, padding: 5}}>
//           <Home />
//           <LoginForm />
//           <View style={styles.lineStyle} />
//           <Userflatlist />
//           <View style={styles.lineStyle} />
//           <UserListView />
//           <GridList />
//         </View>
//       </ScrollView>
//     );
//   }
// }

const styles = StyleSheet.create({
  lineStyle: {
    borderWidth: 0.3,
    borderColor: 'black',
    marginBottom: 10,
    marginTop: 10,
  },
});

import React, {Component} from 'react';
import {Image,View,TouchableOpacity} from 'react-native';

import {NavigationContainer,getFocusedRouteNameFromRoute} from '@react-navigation/native';

import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// import FirstPage from './drawer/First';
// import SecondPage from './drawer/Second';


import HomeScreenStack from './drawer/HomeScreenStack';
import SettingScreenStack from './drawer/SettingScreenStack';


// import HomeScreen from './pages/HomeScreen';
// import ExploreScreen from './pages/ExploreScreen';
// import SettingScreen from './pages/SettingScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

// const NavigationDrawerStructure = (props) => {
//   //Structure for the navigatin Drawer
//   const toggleDrawer = () => {
//     //Props to open/close the drawer
//     props.navigationProps.toggleDrawer();
//   };

//   return (
//     <View style={{flexDirection: 'row'}}>
//       <TouchableOpacity onPress={() => toggleDrawer()}>
//         {/*Donute Button Image */}
//         <Image
//           source={{
//             uri:
//               'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png',
//           }}
//           style={{width: 25, height: 25, marginLeft: 5}}
//         />
//       </TouchableOpacity>
//     </View>
//   );
// };

// const HomeScreenStack = ({navigation}) => {
//   return (
//     <Stack.Navigator initialRouteName="HomeScreen">
//       <Stack.Screen
//         name="BottomTabStack"
//         component={BottomTabStack}
//         options={({route}) => ({
//           headerTitle: getHeaderTitle(route),
//           headerLeft: () => (
//             <NavigationDrawerStructure
//               navigationProps={navigation}
//             />
//           ),
//           headerStyle: {
//             backgroundColor: '#f4511e', //Set Header color
//           },
//           headerTintColor: '#fff', //Set Header text color
//           headerTitleStyle: {
//             fontWeight: 'bold', //Set Header text style
//           },
//         })}
//       />
//     </Stack.Navigator>
//   );
// };
// const SettingScreenStack = ({navigation}) => {
//   return (
//     <Stack.Navigator
//       initialRouteName="SecondPage"
//       screenOptions={{
//         headerLeft: () => (
//           <NavigationDrawerStructure navigationProps={navigation} />
//         ),
//         headerStyle: {
//           backgroundColor: '#f4511e', //Set Header color
//         },
//         headerTintColor: '#fff', //Set Header text color
//         headerTitleStyle: {
//           fontWeight: 'bold', //Set Header text style
//         },
//       }}>
//       <Stack.Screen
//         name="SettingScreen"
//         component={SettingScreen}
//         options={{
//           title: 'Setting', //Set Header Title
//         }}
//       />
//     </Stack.Navigator>
//   );
// };

// const getHeaderTitle = (route) => {
//   const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';

//   switch (routeName) {
//     case 'HomeScreen':
//       return 'Home';
//     case 'ExploreScreen':
//       return 'Explore';
//     case 'BottomTabStack':
//       return 'Home';
//   }
// };

// const BottomTabStack = () => {
//   return (
//     <Tab.Navigator
//       initialRouteName="HomeScreen"
//       tabBarOptions={{
//         activeTintColor: 'tomato',
//         inactiveTintColor: 'gray',
//         style: {
//           backgroundColor: '#e0e0e0',
//         },
//         labelStyle: {
//           textAlign: 'center',
//           fontSize: 16,
//         },
//       }}>
//       <Tab.Screen
//         name="HomeScreen"
//         component={HomeScreen}
//         options={{
//           tabBarLabel: 'Home Screen',
//           /*tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons
//               name="home"
//               color={color}
//               size={size}
//             />
//           ),*/
//         }}
//       />
//       <Tab.Screen
//         name="ExploreScreen"
//         component={ExploreScreen}
//         options={{
//           tabBarLabel: 'Explore Screen',
//           /*tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons
//               name="settings"
//               color={color}
//               size={size}
//             />
//           ),*/
//         }}
//       />
//     </Tab.Navigator>
//   );
// };


export default function DrawerApp() {
  return (
    <NavigationContainer>
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: '#e91e63',
        itemStyle: {marginVertical: 5},
      }}>
      <Drawer.Screen
        name="HomeScreenStack"
        options={{drawerLabel: 'Home Screen Option'}}
        component={HomeScreenStack}
      />
      <Drawer.Screen
        name="SettingScreenStack"
        options={{drawerLabel: 'Setting Screen Option'}}
        component={SettingScreenStack}
      />
    </Drawer.Navigator>
  </NavigationContainer>
 );
}

// *********************************************
// export default function DrawerApp() {
//   return (
//     <NavigationContainer>
//      <Drawer.Navigator drawerStyle={{
//     backgroundColor: '#c6cbef',
//     width: 240,
//   }} >
//   <Drawer.Screen name="First" component={FirstPage}
//         options={{
//            title: 'First',
//            drawerIcon: ({focused, size}) => (
//             <Image source={{uri:'https://cdn4.iconfinder.com/data/icons/lightly-2-essential/24/menu-512.png'}} style={{height: 20, width: 20, borderRadius: 25}}></Image>
//            ),
//         }}  />
//         {/* <Drawer.Screen name="First" component={FirstPage} /> */}
//         <Drawer.Screen name="Second" component={SecondPage} />
//       </Drawer.Navigator>
// </NavigationContainer> 
//  );
// }


/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{Component} from 'react';
import {ListView, ScrollView,StyleSheet, View} from 'react-native';
import LoginForm from './screen/LoginForm';
import GridList from './screen/GridList';
import Userflatlist from './screen/Userflatlist';
import UserListView from './screen/UserListView';


// type Props = {};  
// export default class App extends Component<Props> {  
  export default class App extends Component {  
  render() {  
    return (
      
      <ScrollView nestedScrollEnabled={true}>
        <View style={{flex: 1, padding: 5}}>
          <LoginForm />
        <View style = {styles.lineStyle} />
      
      
       
        <Userflatlist /> 
        <View style = {styles.lineStyle} />
         <UserListView />
      
        <GridList />
        </View>
      </ScrollView>
      
          );  
  }  
}
const styles = StyleSheet.create({
  lineStyle:{
        borderWidth: 0.3,
        borderColor:'black',
       marginBottom:10,
       marginTop:10
   }
 });


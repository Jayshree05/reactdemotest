import React, {Component} from 'react';
import {Text, SafeAreaView,StyleSheet,Button, View, TouchableOpacity} from 'react-native';


const First = ({ navigation }) => {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 , padding: 16}}>
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
                marginBottom: 16
              }}>
              This is the First Page
            </Text>
            <Button
              onPress={
                () => navigation.navigate('Second')
              }
              title="Go to Second Page"
            />
            
          </View>
          
      
        </View>
      </SafeAreaView>
    );
  }
  
  export default First;
import React, {Component} from 'react';
import {Text, StyleSheet, SafeAreaView,View, Button,TouchableOpacity} from 'react-native';

const Second = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
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
            This is Second Page
          </Text>
          <Button
            title="Go to First Page"
            onPress={
              () => navigation.navigate('First')
            }
          />
          {/* <Button
            title="Go to Third Page"
            onPress={
              () => navigation.navigate('ThirdPage')
            }
          /> */}
        </View>
        
      </View>
    </SafeAreaView>
  );
}

export default Second;
  
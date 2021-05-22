import React, {Component} from 'react';
import {View, TextInput, Text, ImageBackground,Alert,StyleSheet,TouchableOpacity, Button, ScrollView} from 'react-native';

const image = { uri: "https://reactjs.org/logo-og.png" };

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ScrollView>
      <View style={styles.full_container}>
      <View>
        <Text style={styles.text_heading}>Login</Text>
        </View>
      <View style={styles.loginFormStyle} >

   

      <TextInput
                style={styles.inputStyle}
                placeholder="Enter Email"
                placeholderTextColor="#969696"
                autoCapitalize="none"
                returnKeyType="next"
                underlineColorAndroid="#f000"
              />

            <TextInput
                style={styles.inputStyle}
                placeholder="Enter Password" 
                placeholderTextColor="#969696"
                autoCapitalize="none"
                returnKeyType="next"
                underlineColorAndroid="#f000"
              />
              <View style={styles.buttonContainer}>
           
              <TouchableOpacity  onPress={() => Alert.alert('button pressed')}
               style={styles.buttonContainer}>
    <Text style={styles.buttonStyle}>Login</Text>
  </TouchableOpacity>

              </View> 
               </View>
      
          
               {/* <ImageBackground  source={{
 uri:
              'https://i.picsum.photos/id/566/536/354.jpg?hmac=Qe2MWolacWFJhNfFjmrRRPCdvD0fOtwXEsq_f53gkic',
          }} style={styles.image}>
     
      <View style={styles.overlay} />
      <Text style={styles.imageTextStyle}>Inside</Text>
    </ImageBackground> */}
      </View>
      
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  full_container:{
    flex: 1,
    flexDirection: 'column',
    margin:10,
    fontWeight: 'bold' 
  },
  text_heading: {  
    fontSize: 15,  
    textAlign: 'left',  
    marginBottom: 5
  },
  inputStyle:{
    borderWidth: 2,
    borderColor: "#000",
    borderRadius: 6,
    fontSize: 15,
    marginBottom: 15, paddingLeft: 15
  },
  buttonContainer: {
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingTop:8,
    paddingBottom:8, 
  },
  buttonStyle: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center"
  },
  image: {
    marginTop:20,
    height:100,
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  imageTextStyle:{
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center"
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(69,85,117,0.7)',
  }
});

export default LoginForm;
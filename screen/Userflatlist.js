import React, {Component} from 'react';
import {View, ImageBackground,FlatList,ScrollView,Image,Text,Alert,StyleSheet} from 'react-native';



const data = [
  {
    user_avatar: 'https://www.w3schools.com/w3images/avatar2.png',
    username: 'user 1',
 },
 {
  user_avatar: 'https://www.w3schools.com/w3images/avatar2.png',
  username: 'user 2',
},
{
  user_avatar: 'https://www.w3schools.com/w3images/avatar2.png',
  username: 'user 3',
},
{
  user_avatar: 'https://www.w3schools.com/w3images/avatar2.png',
  username: 'user 4',
},
];

class Userflatlist extends Component {
  constructor(props) {
    super(props);
    this.state = {data: data};
  }

 

  allMembers = () => {
    return this.state.data.map(singleData => {
      return (
        <View>

        <View style={{alignItems: 'center',  borderWidth: 2,
        borderColor: "#000", marginHorizontal:5,
        borderRadius: 6,}}>

<ImageBackground  source={{
 uri:
              'https://i.picsum.photos/id/566/536/354.jpg?hmac=Qe2MWolacWFJhNfFjmrRRPCdvD0fOtwXEsq_f53gkic',
          }} style={styles.image}>
     
      <View style={styles.overlay} />
      <Text style={styles.imageTextStyle}>Inside Box text </Text>
    </ImageBackground>

          <Image
            source={{uri: singleData.user_avatar}}
            style={{height: 50, width: 50, border: 25, borderRadius: 25}}
          />
          <Text>{singleData.username}</Text>


          <View style={[{flex:1,
      // Try setting `flexDirection` to `"row"`.
      flexDirection: "row"
    }]}>

    <View style={{ flex: 1, backgroundColor: 'rgba(69,85,117,0.7)', padding:3}}><Text>hiiii</Text></View>
    <View style={{ flex: 1, backgroundColor:'rgba(69,80,17,0.9)',padding:3}}><Text>hiiii</Text></View>
    </View>

          </View>
          </View>
      
      );
    });
  };

  render() {
    return (
      <View style={styles.full_container}>
        <Text style={styles.text_heading}>All Members </Text>
        <ScrollView  horizontal>
          {this.allMembers()}
        </ScrollView>
      </View>
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

  image: {
    width:100,
    height:100,
    resizeMode: "cover",
    justifyContent: "flex-end"
  },
  imageTextStyle:{
    fontSize: 10,
    color: "#fff",
    padding:2,
   alignContent: 'flex-end'
  },

  overlay:{
    position: 'absolute',
    top: 80,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.4)'
}
  // overlay: {
  //   // height:20,
  //   justifyContent: "flex-end",
  //   ...StyleSheet.absoluteFillObject,
  //   backgroundColor: 'rgba(69,85,117,0.9)',
  // }
});

export default Userflatlist;
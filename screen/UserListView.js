import React, {Component} from 'react';
import {View, TouchableOpacity,ScrollView,Image,Text,SectionList,StyleSheet} from 'react-native';


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

class UserListView extends Component {
  constructor(props) {
    super(props);
    this.state = {data: data};
  }

  allMembers = () => {
    return this.state.data.map(singleData => {
      return (
        <View>

        <View style={{borderBottomWidth: 1,
        borderBottomColor: "#000", }}>


          <View style={[{flex:1, marginBottom:5,marginTop:5,
      // Try setting `flexDirection` to `"row"` column.
      flexDirection: "row"
    }]}>

    <View style={{ flex: 0.20, padding:3}}>
    
    <Image source={{uri:singleData.user_avatar}} style={{height: 50, width: 50, border: 25, borderRadius: 25}}></Image>
   
    
    </View>
    <View style={{ flex: 0.60,padding:3, justifyContent:'center'}}><Text>hiiii</Text></View>
    <View style={{ flex: 0.20, padding:3,justifyContent:'center'}}>
    <TouchableOpacity  onPress={() => Alert.alert('button pressed')}
               style={styles.buttonContainer}>
    <Text style={styles.buttonStyle}>Action</Text>
  </TouchableOpacity></View>
    </View>

          </View>
          </View>
      
      );
    });
  };

  render() {
    return (
      <View style={styles.full_container}>
        <View>
        <Text style={styles.text_heading}>User list</Text>
        </View>
        <SectionList
                    sections={[  
                        {title: 'A', data: ['Aaaaa']},  
                        {title: 'B', data: ['Bbbbb']},  
                        {title: 'C', data: ['Ccc']}, 
                        {title: 'D', data: ['Ddd']}, 
                    ]}  
                    renderItem={({item}) =>
                     <Text style={styles.item}>{item}</Text>  }  
                    // renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}  
                    keyExtractor={(item, index) => index  }  
        />  
         <View style = {styles.lineStyle} />

         <View>
        <Text style={styles.text_heading}>User list</Text>
        <ScrollView >
          {this.allMembers()}
        </ScrollView>
        </View>
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
    marginBottom: 10 
  },
  sectionHeader: {  
    paddingTop: 2,  
    paddingLeft: 10,  
    paddingRight: 10,  
    paddingBottom: 2,  
    fontSize: 12,  
    fontWeight: 'bold',  
    color: "#fff",  
    backgroundColor: '#8fb1aa',  
},  
item: {  
    padding: 10,  
    fontSize: 12,  
}  ,
lineStyle:{
  borderWidth: 0.3,
  borderColor:'black',
 marginBottom:10,
 marginTop:10
},
buttonContainer: {
  backgroundColor: "#009688",
  borderRadius: 10,
  paddingTop:5,
  paddingBottom:5, 
  alignContent:'center',
  alignItems:'center',
  justifyContent:'center'
},
buttonStyle: {
  fontSize: 12,
  color: "#fff",
  fontWeight: "bold",
  alignSelf: "center"
}
});

export default UserListView;
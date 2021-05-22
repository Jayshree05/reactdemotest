import { Console } from 'console';
import React, {Component} from 'react';
import {View, ImageBackground,Dimensions,Text,FlatList,StyleSheet,Image,ScrollView, TouchableOpacity} from 'react-native';
import { FlatGrid } from 'react-native-super-grid';


const styles = StyleSheet.create({
  gridView: {
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
   image: {
    width:null,
    height:130,
    resizeMode: "cover",
    justifyContent: "flex-end"
  },
  imageTextStyle:{
    paddingLeft:10,
    fontSize: 10,
    color: "#fff",
    padding:2,
   alignContent: 'flex-end'
  },

  overlay:{
    position: 'absolute',
    top: 90,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.6)'
}
});

class GridList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const items = [
      { name: 'TURQUOISE', code: '#1abc9c' }, { name: 'EMERALD', code: '#2ecc71' },
      { name: 'PETER RIVER', code: '#3498db' }, { name: 'AMETHYST', code: '#9b59b6' },
  ];

    return (
      <FlatGrid
        itemDimension={130}
        data={items}
        style={styles.gridView}
        // spacing={20}
        renderItem={({ item, index }) => (
          <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
       
       <ImageBackground  source={{
 uri:
              'https://i.picsum.photos/id/566/536/354.jpg?hmac=Qe2MWolacWFJhNfFjmrRRPCdvD0fOtwXEsq_f53gkic',
          }} style={styles.image}>
     
      <View style={styles.overlay} />
      <Text style={styles.imageTextStyle}>{item.name}</Text>
            <Text style={styles.imageTextStyle}>{item.code}</Text>
    </ImageBackground>

           
          </View>
        )}
      />
    );
  }
}

export default GridList;
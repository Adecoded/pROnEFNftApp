import { Text,View,FlatList,SafeAreaView ,StyleSheet} from 'react-native';
import { useState } from 'react';
import React from 'react'
import {COLORS,NFTData} from  '../constants';
import {Header,Nftcard,FocusedStatusBar} from '../components';

function HomeScreen() {
const [nftData, setNftData] = useState(NFTData)

const handleSearch =(value) => {
  if (!value.length) setNftData(NFTData);

  const filteredData =NFTData.filter((item) => 
  item.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
  );
  if (filteredData.length){
    setNftData(filteredData);
  }else{
    setNftData(NFTData);
  }
}



  return (
  <SafeAreaView style={styles.container}>
  <FocusedStatusBar style={styles.statusbar}/>

  <View style={styles.container}>
  <View style={styles.Nftcomponents}>
  <FlatList
  data={nftData}
  renderItem={({item}) =><Nftcard  data={item}/>}
  keyExtractor={(item)=> item.id}
  showsVerticalScrollIndicator={false}
  ListHeaderComponent={<Header onSearch={handleSearch}/>}
  />
  <View style={styles.cardComponent}>
  <View style={{height:300, backgroundColor:COLORS.primary}} />
  <View  style={{flex:1, backgroundColor:COLORS.white}}/>
  </View>
  </View>
  </View>
  
  </SafeAreaView>
   
  )
}

export default HomeScreen
const styles =StyleSheet.create({
  container:{
flex:1,
  },
  statusbar:{
backgroundColor:COLORS.primary,
zIndex:-1,
  },
  Nftcomponents:{
    zIndex:0,
  },
  cardcontainer:{
    flex:1,
  },
  cardComponent:{
    position:'absolute',
    right:0,
    left:0,
    top:0,
    bottom:0,
    zIndex:-1,
  }
})
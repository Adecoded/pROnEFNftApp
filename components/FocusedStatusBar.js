import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'
import { StatusBar } from 'react-native'
import { useIsFocused } from '@react-navigation/native'
import { FlatList } from 'react-native-gesture-handler'
const FocusedStatusBar = (props) => {
  const isFocused =useIsFocused();
  return  isFocused ? <StatusBar animated={true}{...props}/> : null;
    
 
}

export default FocusedStatusBar
const styles = StyleSheet.create({
  container:{
    flex:1,
  },
 
})
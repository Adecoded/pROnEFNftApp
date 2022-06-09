import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity,Image, } from 'react-native'
import { COLORS,SIZES,SHADOWS,assets, FONTS } from '../constants'
export const CircleButton = ({imgUrl,handlePress,...props}) => {
  return (
   <TouchableOpacity style={{width:40,height:40,backgroundColor:COLORS.white,
  position:'absolute', borderRadius:SIZES.extraLarge, alignItems:'center',justifyContent:'center',
  ...SHADOWS.light,
  ...props,
  }}  onPress={handlePress}>
 <Image source={imgUrl}
 resizeMode='contain'
 style={{width:24,height:24}}
 />
   </TouchableOpacity>
  )
}
export const RectButton = ({minwidth,fontSize,handlePress, ...props}) => {
  return (
    <TouchableOpacity style={{backgroundColor:COLORS.primary,
       borderRadius:SIZES.extraLarge, 
       minWidth:minwidth,
       padding:SIZES.small,
      ...props,
      }}  onPress={handlePress}>
     <Text style={{
       fontFamily:FONTS.semiBold,
    fontSize:fontSize,
    color:COLORS.white,
    textAlign:"center",
    }}>
     Place a bid
     </Text>
       </TouchableOpacity>
  )
}


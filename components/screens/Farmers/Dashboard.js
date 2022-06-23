import React from 'react'
import { Alert, Button, Text, TextInput, View, StyleSheet,Image, TouchableHighlight,
   } from 'react-native';
   import { useNavigation } from '@react-navigation/native';
   import windowWidth from '../../../utils/Dimensions'
   import windowHeight from '../../../utils/Dimensions'
import AsyncStorage from '@react-native-async-storage/async-storage';

const FarmerDashboard = () => {
  const navigation = useNavigation(); 

  var useremail = AsyncStorage.getItem('femail');

  return (
    <View style={styles.container}>
       
 <Text>Dashboard Areas</Text>

  </View>
  )
}


  const styles = StyleSheet.create({
    container: {
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
      width:windowWidth,
      height:windowHeight,
      backgroundColor:'#EEFDE1'
    },
    textContainer:{
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'center',
      padding:20,
    },


  })
  
export default FarmerDashboard

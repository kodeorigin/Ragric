import React, { Component,useState } from 'react';
import { TouchableOpacity, useWindowDimensions } from 'react-native';
import { Alert, Button, Text, TextInput, View,
   StyleSheet, Dimensions ,Image,
  } from 'react-native';
  import { useNavigation } from '@react-navigation/native';
  import windowWidth from './../../utils/Dimensions'
  import windowHeight from './../../utils/Dimensions'

const SigninType = ({})=>{

    const navigation = useNavigation(); 
    const { height, width } = useWindowDimensions();
   return(
    <View style={styles.container}>
       
    <View style={styles.textStyleWrapper}>
    <Text style={styles.textStyle}>Select the option that best describe you </Text>  
    </View>

    <View style={styles.buttonContainer}>
     <TouchableOpacity style={styles.buttonWrapper}  activeOpacity={1} delayPressIn={100}
     onPress={() => navigation.navigate("farmersignintype")}>
        <Image 
        source={require('../images/farmer.png')} 
        style={styles.icon}
        />
    <Text style={styles.buttonText} >Farmer/Supply Chain </Text>  
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonWrapper} activeOpacity={1} delayPressIn={100}
         onPress={() => navigation.navigate("farmersignin")}>
        <Image 
        source={require('../images/market.png')} 
        style={styles.icon}
        />
    <Text style={styles.buttonText}>Produce Market </Text>  
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonWrapper}  activeOpacity={1} delayPressIn={100}
        onPress={() => navigation.navigate("farmersignin")}>
        <Image 
        source={require('../images/mapping.png')} 
        style={styles.icon}
        />
    <Text style={styles.buttonText}>Mapping Solution </Text>  
      </TouchableOpacity>        
    </View>
    </View>

     
   ) 
}

const theme = {
  colors:{
      primary:"#006aff"
  }
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    width:windowWidth,
    height:windowHeight,
    backgroundColor:'#EEFDE1',
    width:windowWidth,
  },
  textStyleWrapper:{
    width:'80%',
    marginLeft:'0%',
    marginTop:25,
    marginBottom:20,
  },
  textStyle:{
    fontSize:16,
    color:'#000000',
    lineHeight:25,
    textAlign:'center',
    marginBottom:20,
    marginTop:50,
  },

  buttonContainer:{
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
  },
  buttonWrapper:{
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    height:130,
    width:"100%",
    minWidth:'60%',
  shadowOffset: { width: 10, height: 10 },
  shadowColor: 'black',
  shadowOpacity: 5,
  elevation: 5,
  // background color must be set
  backgroundColor:'#fff',
    marginTop:25,
shadowRadius: 5, // <- Radius of the shadow
borderRadius: 7,
padding: 16,
  },
  icon: {
 width:35,
 height:35,
 marginTop:10,
  },
  buttonText:{
    marginTop:10,
    fontSize:14,
    textTransform:'uppercase',
    padding:10,
  },



})

export default SigninType;
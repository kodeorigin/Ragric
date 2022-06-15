import React, { Component,useState } from 'react';
import { TouchableOpacity, useWindowDimensions } from 'react-native';
import { Alert, Button, Text, TextInput, View,ScrollView,
   StyleSheet, Dimensions ,Image,
  } from 'react-native';
  import { useNavigation } from '@react-navigation/native';
  import windowWidth from './../../../utils/Dimensions'
  import windowHeight from './../../../utils/Dimensions'

const FarmerSigninType = ({})=>{

    const navigation = useNavigation(); 
    const { height, width } = useWindowDimensions();
   return(
    <View style={styles.ScrollViewContainer}>

      
    <ScrollView  style={styles.ScrollViewStyle}
    showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>

    <View style={styles.container}>
       
    <View style={styles.textStyleWrapper}>
    <Text style={styles.textStyleBold}>Signup/Signin as </Text>  
    <Text style={styles.textStyle}>Select the option that best describe you </Text>  
    </View>

    
    <View style={styles.buttonContainer}>
     <TouchableOpacity style={styles.buttonWrapper} 
     onPress={() => navigation.navigate("farmersignin")}>
        <Image 
        source={require('../../images/farmer.png')} 
        style={styles.icon}
        />
    <Text style={styles.buttonText} >Farmer Registration </Text>  
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonWrapper} 
         onPress={() => navigation.navigate("farmersignin")}>
        <Image 
        source={require('../../images/market.png')} 
        style={styles.icon}
        />
    <Text style={styles.buttonText}>Input Supplier </Text>  
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonWrapper} 
        onPress={() => navigation.navigate("farmersignin")}>
        <Image 
        source={require('../../images/mechanization.png')} 
        style={styles.icon}
        />
    <Text style={styles.buttonText}>Mechanization Services </Text>  
      </TouchableOpacity>  
      <TouchableOpacity style={styles.buttonWrapper} 
        onPress={() => navigation.navigate("farmersignin")}>
        <Image 
        source={require('../../images/finance.png')} 
        style={styles.icon}
        />
    <Text style={styles.buttonText}>Financials </Text>  
      </TouchableOpacity> 
 
            
    </View>

    </View>

    </ScrollView>
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
  ScrollViewStyle:{
    minWidth:"100%",

  },
  ScrollViewContainer:{
    paddingTop:50,
    paddingBottom:10,
    backgroundColor:'#EEFDE1',

  },
  textStyleWrapper:{
    width:'80%',
    marginLeft:'0%',
    marginTop:0,
    marginBottom:20,
  },
  textStyle:{
    fontSize:16,
    color:'#000000',
    lineHeight:25,
    textAlign:'center',
    marginBottom:20,
    marginTop:30,
  },
  textStyleBold:{
    fontSize:22,
    color:'#000000',
    lineHeight:25,
    textAlign:'center',
    marginBottom:0,
    marginTop:50,
  },

  buttonContainer:{
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    marginBottom:20,
  },
  buttonWrapper:{
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    height:130,
    width:"60%",
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
 width:45,
 height:35,
 marginTop:10,
  },
  buttonText:{
    marginTop:10,
    fontSize:14,
    textTransform:'uppercase',
    padding:10,
    textAlign:'center',
    lineHeight:20,
  },



})

export default FarmerSigninType;
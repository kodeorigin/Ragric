import React, { Component,useState } from 'react';
import { Alert, Button, Text, TextInput, View,
   StyleSheet, Dimensions ,Image, TouchableOpacity,Modal,KeyboardAvoidingView, TouchableHighlight 
  } from 'react-native';

import windowWidth from './../../utils/Dimensions'
import windowHeight from './../../utils/Dimensions'

const SignupScreen = ({navigation,route})=>{

  const [isLoading,setIsloading] =useState(false)

  const submitData = ()=>{
    fetch("https://www.woclink.com/restapi/workers/emailregistration.php",{
      method:"post",
      headers:{
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({
          email         
      })
  })
  .then(res=>res.json())
  .then(data=>{
      Alert.alert(`${data.name} is updated successfuly`)
      navigation.navigate("Home")
  })
  .catch(err=>{
    Alert.alert("someting went wrong")
})
  }

  const [email,setEmail] = useState("email")
  const [modal,setModal] = useState(false)
  const [enableshift,setenableShift] = useState(false)
  var width = Dimensions.get('window').width; 


   return(
    <View style={styles.container}>
    <View style={styles.logocontainer}>
    <Image 
    source={require('../images/logo.png')} 
    style={styles.logo}
   />
    <Text style={styles.logoText}>RAGRIC</Text>
    </View>
    <View  style={{ width: width * 0.7 }}>
    <Text style={styles.infoStyle}>Sign up with RAGRIC to get you loans on time  </Text>
    </View>

    <Text style={styles.inputLabel}>Email Address</Text>
    <TextInput
        value={email}
        onFocus={()=>setenableShift(false)}
        theme={theme}
        mode="outlined"
        onChangeText={text => setEmail(text)}
      placeholder={'Email Address'}
      style={styles.input}
    />
   
    <View style={styles.buttonWrapper}>
     
       <TouchableHighlight 
              style={styles.buttonStyle}
              >
        <Button
        rounded
        success
        color='#33AC39'
        title={'S I G N   U P'}
        onPress={() => submitData()}
      />
          </TouchableHighlight> 
    </View>

    <View style={styles.buttomWrapper} >
        <Text style={styles.accountText}>Already Have an Account? </Text>
        <Text style={styles.accountButton} 
        onPress={() => navigation.navigate("farmersignin")}
                >Sign In</Text>
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
    backgroundColor:'#EEFDE1'
  },
  input: {
    width: '90%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#787878',
    marginBottom: 10,
    alignSelf: 'center',
    borderRadius:5,
    paddingLeft:15,
  },
  inputLabel: {
    width: '95%',
    padding: 10,
  },
  infoStyle: {
  fontSize:16,
  textAlign:'center',
  marginTop:15,
  marginBottom:45,
  lineHeight:23,
},
  buttonWrapper: {
    width: '70%',
    alignSelf: 'center',
    marginTop:10, 
  },
  buttonStyle: {
    width:windowWidth,   
    borderRadius:10,
    backgroundColor : "yellow",
    overflow: "hidden",
    marginTop :20
    
  },
  textStyle: {
    fontWeight: 'bold',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 30,
    marginTop:50, 
    fontSize: 18,
    color:'#2E8433',
    fontSize:23,
  },
  logocontainer:{
    display:'flex',
    alignItems: 'center',
    justifyContent: 'center',

  },
logo:{
    width:100,
    height:100,
  },
  logoText:{
    fontSize:20,
    letterSpacing:5,
    marginTop:10,
  },
  buttomWrapper:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginTop:25,
    },
  accountText:{
  color:'#000000',
  fontWeight:'normal',
  fontSize:15,
  marginRight:20,
    },
    accountButton:{
      color:'#2E8433',
      fontWeight:'normal',
      fontSize:15,
      textTransform:'uppercase',
        },
})

export default SignupScreen;
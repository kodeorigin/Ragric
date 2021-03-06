import React, { Component,useState,useCallback } from 'react';
import { Alert, Button, Text, TextInput, View,
   StyleSheet, ActivityIndicator ,Image, TouchableOpacity,Modal,KeyboardAvoidingView, TouchableHighlight,Keyboard 
  } from 'react-native';
  import AsyncStorage from '@react-native-async-storage/async-storage';
import windowWidth from '../../../utils/Dimensions'
import windowHeight from '../../../utils/Dimensions'
import { supplierLogin } from '../../../utils/Apis';

const SupplierSignin = ({navigation,route})=>{

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [modal,setModal] = useState(false)
  const [enableshift,setenableShift] = useState(false)
  const [message,setMessage] = useState("")

  const [isLoading,setIsloading] =useState(false)

  const storeSupplierData = async () => {
    try {
      await AsyncStorage.setItem('semail', email);
    } catch (e) {
      alert("couldn't sign you in, please try again");
    }
  }

  const submitData = ()=>{
		let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
		if(email==""){
			//alert("Please enter Email address");
      setMessage('Please enter Email address')
		}
		else if(reg.test(email) === false)
		{
		//alert("Email is Not Correct");
    setMessage('Enter a valid email')
		return false;
		  }

		else if(password==""){
      setMessage('Please enter password')
		}
		else{
      setIsloading(true)
		fetch(`${supplierLogin}`,{
			method:'POST',
			header:{
				'Accept': 'application/json',
				'Content-type': 'application/json'
			},
			body:JSON.stringify({
				// we will pass our input data to server
				email: email,
				password: password
			})
			
		})
		.then((response) => response.json())
		 .then((responseJson)=>{
      setIsloading(false)
			 if(responseJson == "Data Matched"){
				 // redirect to profile page
         storeSupplierData();
				 navigation.navigate("supplierwelcome");
			 }else{
				 alert("Wrong Login Details");
			 }
		 })
		 .catch((error)=>{
		 console.error(error);
		 });
		}
		
		
		Keyboard.dismiss();
  }


   return(
    <View style={styles.container}>
    <View style={styles.logocontainer}>
    <Image 
    source={require('../../images/logo.png')} 
    style={styles.logo}
   />
    <Text style={styles.logoText}>RAGRIC</Text>
    </View>
    {isLoading &&
                  <View style={styles.loading}>
                      <ActivityIndicator size="large" color="#00ff00" />
                  </View>
                  }
    <Text style={styles.textStyle}>Input Supplier Sign in</Text>
    <Text style={styles.errorMessaage}>{message}</Text>
    <Text style={styles.inputLabel}>Email Address</Text>
    <TextInput
        value={email}
        onFocus={()=>setenableShift(false)}
        theme={theme}
        mode="outlined"
        onChangeText={text => setEmail(text)}
      placeholder={'Email Address'}
      style={styles.input}
       underlineColorAndroid={'transparent'}
    />
    <Text style={styles.inputLabel}>Password</Text>
    <TextInput
      value={password}
      onFocus={()=>setenableShift(false)}
      theme={theme}
      mode="outlined"
      onChangeText={text => setPassword(text)}
      placeholder={'Password'}
      secureTextEntry={true}
      style={styles.input}
      underlineColorAndroid={'transparent'}

    />
    <View style={styles.buttonWrapper}>
     
       <TouchableHighlight 
              style={styles.buttonStyle}
              >
        <Button
        rounded
        success
        color='#33AC39'
        title={'S I G N   I N'}
        onPress={() => submitData()}
      />
          </TouchableHighlight> 
    </View>

    <View style={styles.buttomWrapper} >
        <Text style={styles.accountText}>Don't Have an Account? </Text>
        <Text style={styles.accountButton} 
          onPress={() => navigation.navigate("suppliersignup")}

        >Sign Up</Text>
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
        errorMessaage:{
        color:'red',
        fontSize:16,
        },
        loading: {
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          opacity: 0.5,
          backgroundColor: '#EEFDE1',
          justifyContent: 'center',
          alignItems: 'center'
      }
})

export default SupplierSignin;
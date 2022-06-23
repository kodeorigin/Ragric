import React, { useState,useEffect } from 'react';
import { Alert, Button, Text, TextInput, View,
 StyleSheet, ActivityIndicator ,Image,
 TouchableHighlight,Keyboard,ScrollView,Modal 
} from 'react-native';
  import windowWidth from '../../../utils/Dimensions'
  import windowHeight from '../../../utils/Dimensions'
  import { mechanizationRegistrationTwo } from '../../../utils/Apis';
  const MechanizationSignupTwo = ({route,navigation})=>{

  const { email } = route.params; // Receive email id
  const [country,setCountry] = useState("")
  const [channel,setChannel] = useState("")
  const [bank,setBank] = useState("")
  const [accountname,setAccountName] = useState("")
  const [accountnumber,setAccountNumber] = useState("")
  const [password,setPassword] = useState("")
  const [repassword,setRepassword] = useState("")
  const [modal,setModal] = useState(false)
  const [enableshift,setenableShift] = useState(false)

  const [message,setMessage] = useState("")

  const [isLoading,setIsloading] =useState(false)

  const handleBack=() => {
    navigation.goBack()
  }

 
  const submitData = ()=>{	
		if(country==""){
			//alert("Please enter Email address");
      setMessage('Please enter production country')
		}
          else if(channel==""){
            setMessage('Please enter distribution channel')
              }
          else if(bank==""){
            setMessage('Please enter bank name')
              }
          else if(accountname==""){
              setMessage('Please enter bank account name')
              }
          else if(accountnumber==""){
              setMessage('Please enter bank account number')
                          }    
        else if(password==""){
            setMessage('Please enter password')
              }
        else if(repassword==""){
            setMessage('Please confirm password')
                  }
        else if(password !== repassword){
        setMessage('Passwords does not match')
        }
		else{
      setIsloading(true)
		fetch(`${mechanizationRegistrationTwo}`,{
			method:'POST',
			header:{
				'Accept': 'application/json',
				'Content-type': 'application/json'
			},
			body:JSON.stringify({
				// we will pass our input data to server
				        country: country,
                channel:channel,
                bank: bank,
                accountname:accountname,
                accountnumber:accountnumber,
                email: email,
                password: password,
			})
		})  
    .then((response) => response.json())
    .then((responseJson)=>{
        setIsloading(false)
        if(responseJson == "Successful"){
            // redirect to profile page
            alert("Registration successful");
            navigation.navigate("mechanizationsignin");
            //Navigate to next screen if registration is successful are valid
        //Navigate to next screen if registration is successful are valid
        }else{
            alert(responseJson);
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
         <ScrollView  style={styles.formContainer}
    showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>

    {isLoading &&
                  <View style={styles.loading}>
                      <ActivityIndicator size="large" color="#00ff00" />
                  </View>
                  }
    <Text style={styles.errorMessaage}>{message}</Text>
    <Text style={styles.inputLabel}>Production Country </Text>
    <TextInput
        value={country}
        onFocus={()=>setenableShift(false)}
        theme={theme}
        mode="outlined"
        onChangeText={text => setCountry(text)}
      placeholder={'Enter production country'}
      style={styles.input}
       underlineColorAndroid={'transparent'}
    />
    <Text style={styles.inputLabel}>Distribution Channel Nationwide</Text>
    <TextInput
        value={channel}
        onFocus={()=>setenableShift(false)}
        theme={theme}
        mode="outlined"
        onChangeText={text => setChannel(text)}
      placeholder={'Enter distribution channel nationwide'}
      style={styles.input}
       underlineColorAndroid={'transparent'}
    />
        <Text style={styles.inputLabel}>Bank Details</Text>
    <TextInput
        value={bank}
        onFocus={()=>setenableShift(false)}
        theme={theme}
        mode="outlined"
        onChangeText={text => setBank(text)}
      placeholder={'Enter bank name'}
      style={styles.input}
       underlineColorAndroid={'transparent'}
    />
      <TextInput
        value={accountname}
        onFocus={()=>setenableShift(false)}
        theme={theme}
        mode="outlined"
        onChangeText={text => setAccountName(text)}
      placeholder={'Enter bank account name'}
      style={styles.input}
       underlineColorAndroid={'transparent'}
    /> 
     <TextInput
    value={accountnumber}
    onFocus={()=>setenableShift(false)}
    theme={theme}
    mode="outlined"
    onChangeText={text => setAccountNumber(text)}
  placeholder={'Enter bank account number'}
  style={styles.input}
   underlineColorAndroid={'transparent'}
     />
    <Text style={styles.inputLabel}>Choose password</Text>
    <TextInput
        value={password}
        onFocus={()=>setenableShift(false)}
        theme={theme}
        mode="outlined"
        onChangeText={text => setPassword(text)}
       placeholder={'Enter password'}
       style={styles.input}
       underlineColorAndroid={'transparent'}
    />
    <Text style={styles.inputLabel}>Confirm password</Text>
    <TextInput
        value={repassword}
        onFocus={()=>setenableShift(false)}
        theme={theme}
        mode="outlined"
        onChangeText={text => setRepassword(text)}
      placeholder={'Re-type password '}
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
        title={'C O N T I N U E'}
        onPress={() => submitData()}
      />
          </TouchableHighlight> 

          <TouchableHighlight 
            activeOpacity={0.5}
            underlayColor="#33AC39"
             onPress={handleBack}
           style={styles.goBackStyle}
              >
       <Text  style={styles.goBackText}> Back</Text>
          </TouchableHighlight> 

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
    paddingTop:50,
  },
  input: {
    width: '90%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#787878',
    marginBottom: 10,
    marginLeft:-5,
    alignSelf: 'center',
    borderRadius:5,
    paddingLeft:15,
  },
  inputLabel: {
    width: '95%',
    padding: 10,
    color:'#33AC39',
    marginLeft:5,
 
  },
  uploadWrapper: {
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    width: '90%',
    height:200,
    padding: 10,
    borderWidth: 1,
    borderColor: '#787878',
    marginBottom: 10,
    marginLeft:'5%',
   
    borderRadius:5,
   
  },
  uploadImage:{
    width:25,
    height:25,
  },
  buttonWrapper: {
    width: '70%',
    alignSelf: 'center',
    marginTop:10,
    
  },
  buttonStyle: {
    width:windowWidth,   
    borderRadius:10,
    overflow: "hidden",
    marginTop :20
    
  },
  goBackStyle:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    width:windowWidth,   
    borderRadius:10,
    overflow: "hidden",
    marginTop :20,
    borderColor:'#2E8433',
    borderWidth:2,
    height:40,
    textAlign:'center',
  },
  goBackText:{
    color:'#2E8433',
    textTransform:'uppercase',
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
  formContainer:{
    width:'100%',
    backgroundColor:'#fff',
    paddingBottom:'5%',
    marginBottom:'5%',
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
        textAlign:'center',
        marginTop:'5%',
        marginBottom:'2%'
        },
        loading: {
            width:windowWidth,
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          opacity: 0.5,
          backgroundColor: '#EEFDE1',
          justifyContent: 'center',
          alignItems: 'center'
      },
      uploadStyle:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        width:windowWidth,   
        overflow: "hidden",
        borderColor:'none',
        textAlign:'center',
      },
      uploadText:{
        color:'black',
        paddingTop:15,
        color:'#ccc',
      },
      modalView:{
        position:"absolute",
        bottom:2,
        width:"100%",
        backgroundColor:"#EEFDE1",
        paddingTop:20,
        paddingBottom:20,

    },
    modalButtonView:{
        flexDirection:"row",
        justifyContent:"space-around",
        padding:10,
        width:'80%',
        marginLeft:'10%',
        
    },
    selectButton:{
      width:70,
      height:70,
    },
    cancelStyle:{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      width:'50%',
      marginLeft:'25%',   
      borderRadius:10,
      overflow: "hidden",
      marginTop :20,
      borderColor:'#2E8433',
      borderWidth:2,
      height:40,
      textAlign:'center',
    },
    cancelText:{
      color:'#2E8433',
      textTransform:'uppercase',
    },

})

export default MechanizationSignupTwo;
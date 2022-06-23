  import React, { useState,useEffect } from 'react';
  import { Alert, Button, Text, TextInput, View,
   StyleSheet, ActivityIndicator ,Image,
   TouchableHighlight,Keyboard,ScrollView,Modal 
  } from 'react-native';
  import * as ImagePicker from 'expo-image-picker';
  import { Camera, CameraType } from 'expo-camera';
  import windowWidth from '../../../utils/Dimensions'
  import windowHeight from '../../../utils/Dimensions'
  import { farmerRegistrationTwo } from '../../../utils/Apis';
  const FarmerSignupTwo = ({route,navigation})=>{


  const [hectares,setHectares] = useState("")
  const { email } = route.params; // Receive email id
  const [period,setPeriod] = useState("")
  const [password,setPassword] = useState("")
  const [repassword,setRepassword] = useState("")
  const [picture,setPicture] = useState("")
  const [modal,setModal] = useState(false)
  const [enableshift,setenableShift] = useState(false)
  const [message,setMessage] = useState("")

  const [isLoading,setIsloading] =useState(false)

  const handleBack=() => {
    navigation.goBack()
  }
  
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(CameraType.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);


  
  const pickFromGallery = async ()=>{
    if (hasPermission === true) {
      let data =  await ImagePicker.launchImageLibraryAsync({
        mediaTypes:ImagePicker.MediaTypeOptions.Images,
        allowsEditing:true,
        aspect:[1,1],
        quality:0.5
    })
    if(!data.cancelled){
        let newfile = { 
          uri:data.uri,
          type:`test/${data.uri.split(".")[1]}`,
          name:`test.${data.uri.split(".")[1]}` 
          
      }
        handleUpload(newfile)
    }
    }
    if (hasPermission === false) {
      Alert.alert("Please grant access to camera and retry")
    }
 }
 const pickFromCamera = async ()=>{
  if (hasPermission === true) {
    let data =  await ImagePicker.launchCameraAsync({
      mediaTypes:ImagePicker.MediaTypeOptions.Images,
      allowsEditing:true,
      aspect:[1,1],
      quality:0.5
  })
if(!data.cancelled){
    let newfile = { 
      uri:data.uri,
      type:`test/${data.uri.split(".")[1]}`,
      name:`test.${data.uri.split(".")[1]}` 

  }
    handleUpload(newfile)
}
  }
  if (hasPermission === false) {
    Alert.alert("Please grant access to gallery and retry")
  }

 }

 const handleUpload = (image)=>{
    const data = new FormData()
    data.append('image',image)
    fetch(`http://192.168.158.1/ragric/public/restapi/farmers/upload-profile-image.php?email=${email}`,{
        method:"post",
        body:data
      })
    .then((response) => response.json())
    .then((responseJson)=>{
        setIsloading(false)
        if(responseJson == "Successful"){
          setPicture(true)
          setModal(false)  
          alert(responseJson);
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




  const submitData = ()=>{	
		if(hectares==""){
			//alert("Please enter Email address");
      setMessage('Please enter hectares of land')
		}
          else if(period==""){
            setMessage('Please enter period of input delivered')
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
		fetch(`${farmerRegistrationTwo}`,{
			method:'POST',
			header:{
				'Accept': 'application/json',
				'Content-type': 'application/json'
			},
			body:JSON.stringify({
				// we will pass our input data to server
				        hectares: hectares,
                period: period,
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
            navigation.navigate("farmersignin");
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
    <Text style={styles.inputLabel}>Hectares of land</Text>
    <TextInput
        value={hectares}
        onFocus={()=>setenableShift(false)}
        theme={theme}
        mode="outlined"
        onChangeText={text => setHectares(text)}
      placeholder={'Enter hactares of land'}
      style={styles.input}
       underlineColorAndroid={'transparent'}
    />
    <Text style={styles.inputLabel}>Preferred period of input delivered</Text>
    <TextInput
        value={period}
        onFocus={()=>setenableShift(false)}
        theme={theme}
        mode="outlined"
        onChangeText={text => setPeriod(text)}
      placeholder={'Enter period of input delivered'}
      style={styles.input}
       underlineColorAndroid={'transparent'}
    />
    <Text style={styles.inputLabel}>Choose password {picture}</Text>
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
    
    <Text style={styles.inputLabel}>Profile Picture</Text>

   <View style={styles.uploadWrapper} >
   <TouchableHighlight 
            activeOpacity={0.5}
            underlayColor="#33AC39"
            onPress={() => setModal(true)}
           style={styles.uploadStyle}
              >
                <Image 
    source={require('../../images/addbutton.png')} 
    style={styles.uploadImage}
   />
          </TouchableHighlight>
          <Text       onPress={() => setModal(true)} 
          style={styles.uploadText}> Add profile picture</Text>                 
   </View>

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


    <Modal
    //modal starts here
             animationType="slide"
             transparent={true}
             visible={modal}
             onRequestClose={()=>{
                 setModal(false)
             }}
             >
<View style={styles.modalView}>
<View style={styles.modalButtonView}>

<TouchableHighlight  
 onPress={() => pickFromCamera()}>
  <Image 
    source={require('../../images/camerabutton.png')} 
    style={styles.selectButton}
   />
  </TouchableHighlight>
  
  <TouchableHighlight  
  onPress={() => pickFromGallery()}>
  <Image 
    source={require('../../images/gallerybutton.png')} 
    style={styles.selectButton}
   />
  </TouchableHighlight>
                       
                  </View>
                  <TouchableHighlight 
            activeOpacity={0.5}
            underlayColor="#33AC39"
            onPress={() => setModal(false)}
           style={styles.cancelStyle}
              >
       <Text  style={styles.cancelText}> Back</Text>
          </TouchableHighlight> 


              
              </View>
             </Modal>

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

export default FarmerSignupTwo;
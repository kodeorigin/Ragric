import React,{useEffect,useState} from 'react'
import { Alert, Button, Text, TextInput, View, StyleSheet,Image, TouchableHighlight,
   } from 'react-native';
   import { useNavigation } from '@react-navigation/native';
   import windowWidth from '../../../utils/Dimensions'
   import windowHeight from '../../../utils/Dimensions'
import AsyncStorage from '@react-native-async-storage/async-storage';

const WelcomeFarmer = () => {
  const navigation = useNavigation(); 
  const [farmeremail, setFarmerEmail] = useState("");

  useEffect(() => {
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('femail')
      if(value !== null) {
       setFarmerEmail(value)
      }else{
        navigation.navigate("farmersignin");
      };
    } catch(e) {
      // error reading value
    }
  }
  getData();
}, []);

  return (
    <View style={styles.container}>
        <View style={styles.textContainer}>
    <Text style={styles.welcomeHeading}>Welcome! {farmeremail}</Text>
    <Text style={styles.usernameText}>John Doe</Text>
    <Text style={styles.welcomeDescription}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Velit aliquam volutpat aliquam at duis elit integer purus justo.
     Amet, nibh semper pharetra, nisl dictum id donec. 
    </Text>

      </View>
    <View style={styles.logocontainer}>
    <Image 
    source={require('../../images/logo.png')} 
    style={styles.logo}
     />
 <View   style={styles.bottomWrapper}>
 <TouchableHighlight 
            activeOpacity={0.5}
            underlayColor="#33AC39"
            onPress={() => navigation.navigate("farmerdashboard")}
           style={styles.profileStyle}
              >
       <Text  style={styles.profileText}> View Profile</Text>
          </TouchableHighlight>
 </View>
    </View>

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
    welcomeHeading:{
fontSize:20,
marginBottom:10,
    },
    usernameText:{
      fontSize:20,
    },
    welcomeDescription:{
    fontSize:15,
    marginTop:50,
    marginBottom:30,
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
      marginTop :20,
    },
    bottomWrapper:{
      width:windowWidth, 
      minWidth:'80%', 
      marginTop:80, 
    },
    profileStyle:{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      width:windowWidth,   
      borderRadius:10,
      overflow: "hidden",
      marginTop :20,
      backgroundColor:'#33AC39',
      height:50,
      textAlign:'center',
    },
    profileText:{
      color:'#fff',
      textTransform:'uppercase',
    },
    logocontainer:{
      display:'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width:windowWidth,   
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

  })
  
export default WelcomeFarmer

import React, {useState } from 'react';
import { Button, Text, TextInput, View,
   StyleSheet, ActivityIndicator,ScrollView, 
   TouchableHighlight,Keyboard 
  } from 'react-native';
  import { useNavigation } from '@react-navigation/native';
import windowWidth from '../../../utils/Dimensions'
import windowHeight from '../../../utils/Dimensions'
import { mechanizationRegistration } from '../../../utils/Apis';
const MechanizationSignup = ({props})=>{

    const navigation = useNavigation(); 

  const [fullname,setFullname] = useState("")
  const [companyname,setCompanyName] = useState("")
  const [email,setEmail] = useState("")
  const [companyaddress,setCompanyAddress] = useState("")
  const [institutionaddress,setInstitutionAddress] = useState("")
  const [product,setProduct] = useState("")
  const [funds,setFunds] = useState("")
  const [phone,setPhone] = useState("")

 
  const [modal,setModal] = useState(false)
  const [enableshift,setenableShift] = useState(false)
  const [message,setMessage] = useState("")

  const [isLoading,setIsloading] =useState(false)

  const handleBack=() => {
    navigation.goBack()
  }
  const submitData = ()=>{
		let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
        let phonereg = /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d+)\)?)[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?)+)(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/i;
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
          else if(fullname==""){
        setMessage('Please enter fullname')
          }
          else if(companyname==""){
            setMessage('Please enter company name')
              }
        else if(companyaddress==""){
            setMessage('Please enter company address')
              }
        else if(institutionaddress==""){
                setMessage('Please enter address of institution')
              }
        else if(phone==""){
            setMessage('Please enter contact/phone number')
                  }
        else if(phonereg.test(phone) === false){
        setMessage('Please enter a valid phone number')
                          }
        else if(product==""){
            setMessage('Please preferred products to finance')
                }
                else if(funds==""){
                  setMessage('Please amount of fund intended')
                }
        
		else{
      setIsloading(true)
		fetch(`${mechanizationRegistration}`,{
			method:'POST',
			header:{
				'Accept': 'application/json',
				'Content-type': 'application/json'
			},
			body:JSON.stringify({
				// we will pass our input data to server
                fullname:fullname,
				        companyname: companyname,
                email: email,
                companyaddress: companyaddress,
                institutionaddress:institutionaddress,
                phone: phone,
                product: product,
                funds: funds
			})
		})  
        .then((response) => response.json())
        .then((responseJson)=>{
            setIsloading(false)
            if(responseJson == "Successful"){
                // redirect to profile page
                navigation.navigate('mechanizationsignuptwo', { email: email }); // Passing email id to the next page
            //Navigate to next screen if registration is successful 
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
    <Text style={styles.inputLabel}>Full Name</Text>
    <TextInput
        value={fullname}
        onFocus={()=>setenableShift(false)}
        theme={theme}
        mode="outlined"
        onChangeText={text => setFullname(text)}
      placeholder={'Enter full name'}
      style={styles.input}
       underlineColorAndroid={'transparent'}
    />
    <Text style={styles.inputLabel}>Full Name of Company</Text>
    <TextInput
        value={companyname}
        onFocus={()=>setenableShift(false)}
        theme={theme}
        mode="outlined"
        onChangeText={text => setCompanyName(text)}
      placeholder={'Enter full name of company'}
      style={styles.input}
       underlineColorAndroid={'transparent'}
    />
    <Text style={styles.inputLabel}>Email Address</Text>
    <TextInput
        value={email}
        onFocus={()=>setenableShift(false)}
        theme={theme}
        mode="outlined"
        onChangeText={text => setEmail(text)}
      placeholder={'Enter email address'}
      style={styles.input}
       underlineColorAndroid={'transparent'}
    />
    <Text style={styles.inputLabel}>Contact</Text>
    <TextInput
        value={phone}
        onFocus={()=>setenableShift(false)}
        theme={theme}
        mode="outlined"
        keyboardType="numeric"
        onChangeText={text => setPhone(text)}
      placeholder={'Enter contact/phone number '}
      style={styles.input}
       underlineColorAndroid={'transparent'}
    />
     <Text style={styles.inputLabel}>Address of Company</Text>
    <TextInput
        value={companyaddress}
        onFocus={()=>setenableShift(false)}
        theme={theme}
        mode="outlined"
        onChangeText={text => setCompanyAddress(text)}
      placeholder={'Enter address of company'}
      style={styles.input}
       underlineColorAndroid={'transparent'}
    />
     <Text style={styles.inputLabel}>Address of Institutino</Text>
    <TextInput
        value={institutionaddress}
        onFocus={()=>setenableShift(false)}
        theme={theme}
        mode="outlined"
        onChangeText={text => setInstitutionAddress(text)}
      placeholder={'Enter address of insitution'}
      style={styles.input}
       underlineColorAndroid={'transparent'}
    />
    <Text style={styles.inputLabel}>Preferred Products to Finance</Text>
    <TextInput
        value={product}
        onFocus={()=>setenableShift(false)}
        theme={theme}
        mode="outlined"
        onChangeText={text => setProduct(text)}
       placeholder={'Enter preferred product to finance'}
       style={styles.input}
       underlineColorAndroid={'transparent'}
    />

    <Text style={styles.inputLabel}>Amount of fund intended</Text>
    <TextInput
        value={funds}
        onFocus={()=>setenableShift(false)}
        theme={theme}
        mode="outlined"
        onChangeText={text => setFunds(text)}
      placeholder={'Enter amount of funds intended'}
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
      }
})

export default MechanizationSignup;
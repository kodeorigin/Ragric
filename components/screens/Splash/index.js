import { StatusBar } from 'expo-status-bar';
import React , {Component} from 'react';
import {windowWidth} from './../../../utils/Dimensions';
import {windowHeight} from './../../../utils/Dimensions';
import * as Animatable from 'react-native-animatable';

import {
   StyleSheet, 
   Text,
   Image,
   View,
   ScrollView,
   ImageBackground, } from 'react-native';
import { TextInput, TouchableHighlight } from 'react-native-web';

export default class SplashScreen extends Component {
  render() {
      return (
       
<ImageBackground  style={styles.background}
                 resizeMode='cover' 
                 source={require('../../images/splash.png')}>

    <ScrollView 
    horizontal={true} 
    pagingEnabled={true}  
   
    >
     <View style={styles.welcome}>
     <Animatable.View 
     animation = "bounceIn" iterationCount={1} direction="alternate" duration={5000}
    style={styles.container}>
       <Image 
        source={require('../../images/logo.png')} 
        style={styles.welcomelogo}
       />
</Animatable.View>

<Animatable.Text 
  animation="pulse" easing="ease-out" iterationCount="infinite" duration={3000}

style={styles.welcomeText}>RAGRIC</Animatable.Text>
     </View>

   
</ScrollView>
</ImageBackground>

    
  );
}
}


const styles = StyleSheet.create({
  container: {
    
  },
  background: {
    width: '100%',
    height: '100%',
    flex: 1 
  },
  welcome:{
flex: 1,
alignItems: 'center',
justifyContent: 'center',
width:windowWidth,
height: windowHeight,
  }, 
  welcomeText:{
color: '#111111',
fontSize: 35,
fontWeight:'normal',
paddingTop:30,
letterSpacing:8,

  },
  green:{
    backgroundColor: '#fff',
    flexGrow:1,
    padding:10,
  },
  blue:{
    backgroundColor: '#003c51',
  },
  welcomelogo:{
    width:180,
    height:180,
    marginTop:50,
  }
});

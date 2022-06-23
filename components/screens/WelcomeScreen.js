import { StatusBar } from 'expo-status-bar';
import React , {Component} from 'react';
import HomeScreen from './HomeScreen';
import {
   StyleSheet, 
   Text,
   Image,
   Dimensions,
   View,
   ScrollView, } from 'react-native';
import LandingScreen from './LandingScreen';
import SplashScreen from './Splash';
import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen';
import SigninType from './SigninType';
import FarmerSignupTwo from './Farmers/SignupTwo';
import WelcomeFarmer from './Farmers/WelcomeScreen';
import MechanizationSignupTwo from './Mechanization/SignupTwo';

export default class WelcomeScreen extends Component {
  
constructor(props){
  super(props);
  this.state = {
      timePassed: false,
  };
}

componentDidMount() {
  setTimeout( () => {
      this.setTimePassed();
  },5000);
}

setTimePassed() {
  this.setState({timePassed: true});
}

render() {
  if (!this.state.timePassed) {
      return <SplashScreen />;
  } else {
      return <SigninType />;
  }
}

};

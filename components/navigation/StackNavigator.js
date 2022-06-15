import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import WelcomeScreen from '../screens/WelcomeScreen';
import LandingScreen from '../screens/LandingScreen';
import HomeScreen from '../screens/HomeScreen';
import SigninType from '../screens/SigninType';
import InvestorSignin from '../screens/Investors/Signin';
import FinancialSignin from '../screens/Financials/Signin';
import ServiceProviderSignin from '../screens/ServiceProviders/Signin';
import SupplierSignin from '../screens/Suppliers/Signin';
import UserSignin from '../screens/Users/Signin';
import FarmerSignin from '../screens/Farmers/Signin';
import FarmerSigninType from '../screens/Farmers/SigninType';


const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Group>
           <Stack.Screen name="welcome" component={WelcomeScreen} />
           <Stack.Screen name="signintype" component={SigninType} />
           <Stack.Screen name="home" component={HomeScreen} />

           <Stack.Screen name="farmersignin" component={FarmerSignin} />
           <Stack.Screen name="farmersignintype" component={FarmerSigninType} />

           <Stack.Screen name="investorsignin" component={InvestorSignin} />
           <Stack.Screen name="financialsignin" component={FinancialSignin} />
           <Stack.Screen name="serviceprovidersignin" component={ServiceProviderSignin} />
           <Stack.Screen name="suppliersignin" component={SupplierSignin} />
           <Stack.Screen name="endusersignin" component={UserSignin} />


       </Stack.Group>
   </Stack.Navigator>

  );
};




export default StackNavigator;
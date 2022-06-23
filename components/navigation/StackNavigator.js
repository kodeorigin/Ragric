import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import WelcomeScreen from '../screens/WelcomeScreen';
import HomeScreen from '../screens/HomeScreen';
import SigninType from '../screens/SigninType';
import SupplierSignin from '../screens/Suppliers/Signin';
import FarmerSignin from '../screens/Farmers/Signin';
import FarmerSigninType from '../screens/Farmers/SigninType';
import FarmerSignup from '../screens/Farmers/Signup';
import FarmerSignupTwo from '../screens/Farmers/SignupTwo';
import FarmerDashboard from '../screens/Farmers/Dashboard';
import WelcomeFarmer from '../screens/Farmers/WelcomeScreen';
import SupplierSignup from '../screens/Suppliers/Signup';
import SupplierSignupTwo from '../screens/Suppliers/SignupTwo';
import SupplierWelcome from '../screens/Suppliers/WelcomeScreen';
import SupplierDashboard from '../screens/Suppliers/Dashboard';
import MechanizationSignin from '../screens/Mechanization/Signin';
import MechanizationSignup from '../screens/Mechanization/Signup';
import MechanizationSignupTwo from '../screens/Mechanization/SignupTwo';
import MechanizationWelcome from '../screens/Mechanization/WelcomeScreen';
import MechanizationDashboard from '../screens/Mechanization/Dashboard';
import InvestorSignupTwo from '../screens/Financials/Investors/SignupTwo';
import InvestorWelcome from '../screens/Financials/Investors/WelcomeScreen';
import InvestorDashboard from '../screens/Financials/Investors/Dashboard';
import InvestorSignup from '../screens/Financials/Investors/Signup';
import InvestorSignin from '../screens/Financials/Investors/Signin';
import FinancialSigninType from '../screens/Financials/SigninType';
import InstitutionSignin from '../screens/Financials/Institution/Signin';
import InstitutionDashboard from '../screens/Financials/Institution/Dashboard';
import InstitutionWelcome from '../screens/Financials/Institution/WelcomeScreen';
import InstitutionSignupTwo from '../screens/Financials/Institution/SignupTwo';
import InstitutionSignup from '../screens/Financials/Institution/Signup';


const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Group>
           <Stack.Screen name="welcome" component={WelcomeScreen} />
           <Stack.Screen name="signintype" component={SigninType} />
           <Stack.Screen name="home" component={HomeScreen} />

           <Stack.Screen name="farmersignin" component={FarmerSignin} />
           <Stack.Screen name="farmersignup" component={FarmerSignup} />
           <Stack.Screen name="farmersignuptwo" component={FarmerSignupTwo} />
           <Stack.Screen name="farmersignintype" component={FarmerSigninType} />
           <Stack.Screen name="farmerwelcome" component={WelcomeFarmer} />
           <Stack.Screen name="farmerdashboard" component={FarmerDashboard} />

           <Stack.Screen name="suppliersignin" component={SupplierSignin} />
           <Stack.Screen name="suppliersignup" component={SupplierSignup} />
           <Stack.Screen name="suppliersignuptwo" component={SupplierSignupTwo} />
           <Stack.Screen name="supplierwelcome" component={SupplierWelcome} />
           <Stack.Screen name="supplierdashboard" component={SupplierDashboard} />


           <Stack.Screen name="investorsignin" component={InvestorSignin} />
           <Stack.Screen name="investorsignup" component={InvestorSignup} />
           <Stack.Screen name="investorsignuptwo" component={InvestorSignupTwo} />
           <Stack.Screen name="investorwelcome" component={InvestorWelcome} />
           <Stack.Screen name="investordashboard" component={InvestorDashboard} />

           <Stack.Screen name="institutionsignin" component={InstitutionSignin} />
           <Stack.Screen name="institutionsignup" component={InstitutionSignup} />
           <Stack.Screen name="institutionsignuptwo" component={InstitutionSignupTwo} />
           <Stack.Screen name="institutionwelcome" component={InstitutionWelcome} />
           <Stack.Screen name="institutiondashboard" component={InstitutionDashboard} />

           <Stack.Screen name="financialsignintype" component={FinancialSigninType} />


           <Stack.Screen name="mechanizationsignin" component={MechanizationSignin} />
           <Stack.Screen name="mechanizationsignup" component={MechanizationSignup} />
           <Stack.Screen name="mechanizationsignuptwo" component={MechanizationSignupTwo} />
           <Stack.Screen name="mechanizationwelcome" component={MechanizationWelcome} />
           <Stack.Screen name="mechanizationdashboard" component={MechanizationDashboard} />

       </Stack.Group>
   </Stack.Navigator>

  );
};




export default StackNavigator;
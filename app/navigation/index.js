import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import WelcomeScreen from "../screens/Welcome/WelcomeScreen";
import SignInScreen from '../screens/SignIn/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen/SignUpScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmail/ConfirmEmailScreen';
import ForgotPasswordScreen from '../screens/ForgotPassword/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/NewPassword/NewPasswordScreen';

import 'react-native-gesture-handler';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name = "Welcome" component = {WelcomeScreen}  />
        <Stack.Screen name = "SignIn" component = {SignInScreen}  />
        <Stack.Screen name = "SignUp" component = {SignUpScreen}  />
        <Stack.Screen name = "ConfirmEmail" component = {ConfirmEmailScreen}  />
        <Stack.Screen name = "ForgotPassword" component = {ForgotPasswordScreen}  />
        <Stack.Screen name = "NewPassword" component = {NewPasswordScreen}  />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
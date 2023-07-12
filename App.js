import React from 'react'
import { StatusBar } from 'expo-status-bar';
import {View, Text, SafeAreaView, StyleSheet } from 'react-native';
import Navigation from './app/navigation';
import WelcomeScreen from './app/screens/Welcome/WelcomeScreen';
import 'react-native-gesture-handler';


export default function App() {
 //return <WelcomeScreen />;
 //return <SignInScreen />;
 //return <SignUpScreen />
 //return <ConfirmEmailScreen />
 //return <ForgotPasswordScreen />
 return <Navigation />
}

const styles = StyleSheet.create({
  background: {
      flex: 1
  }
})


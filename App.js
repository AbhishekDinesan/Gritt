import React from 'react'
import { StatusBar } from 'expo-status-bar';
import {View, Text, SafeAreaView, StyleSheet } from 'react-native';
import Navigation from './app/navigation';
import WelcomeScreen from './app/screens/Welcome/WelcomeScreen';
import 'react-native-gesture-handler';
//import { Authenticator } from '@aws-amplify/ui-react-native';
import Amplify from 'aws-amplify';
import config from './src/aws-exports'
//import '@aws-amplify/ui/dist/style.css';

//Amplify.configure(config);


const App = () => {
 return <Navigation />
}

const styles = StyleSheet.create({
  background: {
      flex: 1
  }
})

export default App;

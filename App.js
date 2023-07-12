import React from 'react'
import { StatusBar } from 'expo-status-bar';
import {View, Text, SafeAreaView, StyleSheet } from 'react-native';
import WelcomeScreen from "./app/screens/WelcomeScreen";
import SignInScreen from './app/screens/SignInScreen';

export default function App() {
 // return <WelcomeScreen />;
 return <SignInScreen />;
}

const styles = StyleSheet.create({
  background: {
      flex: 1
  }
})


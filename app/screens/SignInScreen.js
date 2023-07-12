import { View,Image,StyleSheet, useWindowDimensions, ScrollView} from 'react-native'
import React, {useState} from 'react'
import CustomInput from '../components/CustomInput';
import SignInButton from '../components/SignInButton';
import SocialSignIn from '../components/SocialSignIn/SocialSignIn';
import { useNavigation } from '@react-navigation/native';

import colours from '../config/colours';


const SignInScreen = () => {
const {height} = useWindowDimensions();
const {username, setUsername} = useState('');
const {password, setPassword} = useState('');

const navigation = useNavigation();

const onSignInPressed = () =>{
  console.warn("Feature not implemented");
}

const onForgotPasswordPressed = () =>{
  navigation.navigate("ForgotPassword");
}

const onDontHavePressed = () =>{
  navigation.navigate("SignUp");
}

  return (
    <ScrollView showsVerticalScrollIndicator= {false}>
    <View style = {styles.root}>
        <Image source = {require("../assets/logo.png")} style = {[styles.logo, {height: height * 0.3}]}  />
        <CustomInput placeholder= "Username" value = {username} setValue = {setUsername}/>
        <CustomInput 
        placeholder= "Password" 
        value = {password} 
        setValue = {setPassword}
        secureTextEntry={true}
        />
        <SignInButton text = "Sign In" onPress={onSignInPressed}/>

        <SignInButton text = "Forgot Password?" onPress={onForgotPasswordPressed} type = "tertiary"/>

        <SocialSignIn />

      <SignInButton text = "Don't have an account?" onPress={onDontHavePressed} type = "tertiary"/>


    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    root:{
        alignItems: 'center',
        padding: 20,
        //backgroundColor: colours.backwhite,
    },
    logo:{
        width: "300%",
        maxWidth: 2000,
        maxHeight: 2000,
    },
});

export default SignInScreen
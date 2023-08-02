import { View,Image,StyleSheet, useWindowDimensions, ScrollView, TextInput} from 'react-native'
import React, {useState} from 'react'
import CustomInput from '../../components/CustomInput';
import ButtonCreator from '../../components/ButtonCreator';
import SocialSignIn from '../../components/SocialSignIn/SocialSignIn';
import { useNavigation } from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form'


import colours from '../../config/colours';
import { Button } from 'react-native-web';
import { SignInGoogle } from '../../config/firebase';


const SignInScreen = () => {
const {height} = useWindowDimensions();
const {username, setUsername} = useState('');
const {password, setPassword} = useState('');

const {
  control, 
  handleSubmit, 
  formState = {errors},} = useForm();
const navigation = useNavigation();

const onSignInPressed = (data) =>{
  //console.warn("Feature not implemented");
  console.warn(data);
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
        <Image source = {require("../../assets/logo.png")} style = {[styles.logo, {height: height * 0.3}]}  />
  
        <CustomInput 
        name = "username"
        placeholder= "Username" 
        control = {control}
        rules = {{required: true}}
        />
        <CustomInput 
        placeholder= "Password" 
        name = "password"
        control = {control}
        secureTextEntry={true}
        rules = {{required: true}}
        />

        <ButtonCreator text = "Sign In" onPress={handleSubmit(onSignInPressed)}/>

        <ButtonCreator text = "Forgot Password?" onPress={onForgotPasswordPressed} type = "tertiary"/>

        <SocialSignIn />

      <ButtonCreator text = "Don't have an account?" onPress={onDontHavePressed} type = "tertiary"/>
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
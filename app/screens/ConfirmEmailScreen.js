import { View,Image,StyleSheet, useWindowDimensions, ScrollView, Text} from 'react-native'
import React, {useState} from 'react'
import CustomInput from '../components/CustomInput';
import SignInButton from '../components/SignInButton';
import SocialSignIn from '../components/SocialSignIn';
import { useNavigation } from '@react-navigation/native';

import colours from '../config/colours';

const ConfirmEmailScreen = () => {
const {code, setCode} = useState('');

const navigation = useNavigation();

const onSignInPressed = () =>{
  navigation.navigate("SignIn");
}

const onConfirmPressed = () =>{
  console.warn("Feature not implemented");
}

const onResetPressed = () =>{
  console.warn("Feature not implemented");
}

  return (
    <ScrollView showsVerticalScrollIndicator= {false}>
    <View style = {styles.root}>

        <Text style = {styles.title}>Confirm your email</Text>
        <CustomInput placeholder= "Enter your confirmation code" value = {code} setValue = {setCode}/>
        <SignInButton text = "Confirm" onPress={onConfirmPressed}/>

      <SignInButton text = "Resend Code" onPress={onResetPressed} type = "secondary"/> 

      <SignInButton text = "Back to Sign In" onPress={onSignInPressed} type = "tertiary"/> 


    </View>
    </ScrollView>
  )
}
// watch the onPress above for errors, signin vs signup etc.
const styles = StyleSheet.create({
    root:{
        alignItems: 'center',
        padding: 20,
        top:50,
        //backgroundColor: colours.backwhite,
    },
    title:{
      fontSize :24,
      fontWeight: 'bold',
      color: "#051C60",
      margin: 10,
    },
    text:{
      color:'grey',
      fontSize: 11,
      marginVertical: 10,
    },
    link:{
      color: "#FDB075"
    }
      
});

export default ConfirmEmailScreen
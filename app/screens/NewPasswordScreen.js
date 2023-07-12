import { View,Image,StyleSheet, useWindowDimensions, ScrollView, Text} from 'react-native'
import React, {useState} from 'react'
import CustomInput from '../components/CustomInput';
import SignInButton from '../components/SignInButton';
import SocialSignIn from '../components/SocialSignIn';
import { useNavigation } from '@react-navigation/native';

import colours from '../config/colours';



const NewPasswordScreen = () => {


  const navigation = useNavigation();

  const onSignInPressed = () =>{
    navigation.navigate("SignIn");
  }
  
  const onSubmitPressed = () =>{
    console.warn("Feature not implemnted")
  }

  
const {code, setCode} = useState('');
const {newPassword, setNewPassword} = useState('');
  return (
    <ScrollView showsVerticalScrollIndicator= {false}>
    <View style = {styles.root}>

        <Text style = {styles.title}>Reset Your Password</Text>
        <CustomInput placeholder= "Code" value = {code} setValue = {setCode}/>
        <CustomInput placeholder= "New Password" value = {newPassword} setValue = {setNewPassword}/>
        <SignInButton text = "Submit" onPress={onSubmitPressed}/>

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

export default NewPasswordScreen
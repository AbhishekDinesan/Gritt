import { View,Image,StyleSheet, useWindowDimensions, ScrollView, Text} from 'react-native'
import React, {useState} from 'react'
import CustomInput from '../../components/CustomInput';
import ButtonCreator from '../../components/ButtonCreator';
import SocialSignIn from '../../components/SocialSignIn';
import { useNavigation} from '@react-navigation/native';

import colours from '../../config/colours';



const SignUpScreen = () => {
const [email, setEmail]  = useState('');
const {username, setUsername} = useState('');
const {password, setPassword} = useState('');
const {passwordTwo, setPasswordTwo} = useState('');

const navigation = useNavigation();

const onSignInPressed = () =>{
  navigation.navigate("SignIn");
}
const onRegisterPressed = () =>{
  navigation.navigate("ConfirmEmail");
}

const OnTermsOfUsePressed = () =>{
  console.warn("Terms of Use & Privacy");
}
const onDontHavePressed = () =>{
  console.warn("LOL make an account loser");
}





  return (
    <ScrollView showsVerticalScrollIndicator= {false}>
    <View style = {styles.root}>

        <Text style = {styles.title}>Create an Account</Text>
        <CustomInput placeholder= "Username" value = {username} setValue = {setUsername}/>
        <CustomInput placeholder= "Email" value = {email} setValue = {setEmail}/>
        <CustomInput 
        placeholder= "Password" 
        value = {password} 
        setValue = {setPassword}
        secureTextEntry={true}
        />
        <CustomInput 
        placeholder= "Repeat Password" 
        value = {passwordTwo} 
        setValue = {setPasswordTwo}
        secureTextEntry={true}
        />
        <ButtonCreator text = "Register" onPress={onRegisterPressed}/>

        <Text style = {styles.text}>
          By registering, you adhere to our <Text style = {styles.link} onPress={OnTermsOfUsePressed}>
          Terms of Use</Text> and 
          <Text style = {styles.link} onPress={OnTermsOfUsePressed}> Privacy Policy</Text></Text>

        <SocialSignIn />

      <ButtonCreator text = "Have an Account? Sign In?" onPress={onSignInPressed} type = "tertiary"/> 


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

export default SignUpScreen
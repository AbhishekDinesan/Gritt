import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View, Button, Pressable} from 'react-native';
import { useNavigation} from '@react-navigation/native';
import ButtonCreator from '../../components/ButtonCreator/ButtonCreator';

import colours from '../../config/colours';


function WelcomeScreen(props) {
    const navigation = useNavigation();
    function onLoginPressed() {
        navigation.navigate("SignIn")
    }
    const onSignUpPressed = () =>{
        navigation.navigate("SignUp");
    }

    return (
        <ImageBackground 
        style = {styles.background}
        source={require("../../assets/background.jpg")}
        >
            <Image style = {styles.logo}source = {require("../../assets/logo.png")} />
            <ButtonCreator type = "span" backColour = {colours.primary} text= "Login" onPress={onLoginPressed}/>
            <ButtonCreator type = "span" backColour = {colours.secondary} text= "Sign Up" onPress={onSignUpPressed}/>
             {/* 
            <Pressable onPress={onLoginPressed} style = {styles.loginButton}>
                <Text style = {styles.loginButtonText}>Login</Text>
            </Pressable>
            <Pressable onPress = {onSignUpPressed}style = {styles.signUpButton}>
                <Text style = {styles.signUpButtonText}>Sign Up</Text>
            </Pressable>
            */}
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        top: 50,
        alignItems: 'center',
    },
    loginButton:{
        width: "100%",
        height: 70,
        backgroundColor: colours.primary,
        
    },
    logo:{
        width: 1000,
        height: 1000,
        position: 'absolute', // use percents here
        top: -350,
    },
    signUpButton:{
        width: "100%",
        height: 125,
        backgroundColor: colours.secondary,
        
    },
    loginButtonText:{
        color: colours.white,
        top:15,
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
    },
    signUpButtonText:{
        color: colours.white,
        top:15,
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
    },
});

export default WelcomeScreen;
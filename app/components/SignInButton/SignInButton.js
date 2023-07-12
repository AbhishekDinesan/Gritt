import { View, Text, StyleSheet, Pressable} from 'react-native'
import React from 'react'

import colours from '../../config/colours'

const SignInButton = ({ onPress, text, type = "primary", backColour, frontColour }) => { //type is defeaulted
  return (
    <Pressable onPress = {onPress} 
    style = {[styles.container, 
    styles[`container_${type}`],
    backColour ? {backgroundColor: backColour} : {}
    ]}>
      <Text 
      style = {[
        styles.text, 
        styles[`text_${type}`],
        frontColour ? {color: frontColour} : {} // the semi colon is an else/or
      ]}>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        padding: 15,
        marginVertical: 10,
        alignItems:'center',
        borderRadius: 5,
    },
    container_primary: {
        backgroundColor: colours.buttonBlue,
    },
    container_secondary:{
      borderColor: "#3B71F3",
      borderWidth: 2,
    },
    container_tertiary: {},
    text: {
        fontWeight: 'bold',
        color: colours.white,
    },
    text_tertiary: {
        color: colours.grey,
    },
    text_secondary:{
      color: "#3B71F3",
    }
});

export default SignInButton
import { View, Text, StyleSheet, Pressable} from 'react-native'
import React from 'react'

import colours from '../../config/colours'

const ButtonCreator = ({ onPress, text, type = "primary", backColour, frontColour }) => { //type is defeaulted
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
        
        alignItems:'center',
        borderRadius: 5,
    },
    container_primary: {
        backgroundColor: colours.buttonBlue,
        marginVertical: 10,
        padding: 15,
    },
    container_secondary:{
      padding: 15,
      marginVertical: 10,
      borderColor: "#3B71F3",
      borderWidth: 2,
    },
    container_tertiary: {},
    text: {
      padding: 15,
        fontWeight: 'bold',
        color: colours.white,
        
    },
    text_tertiary: {
        color: colours.grey,
    },
    text_secondary:{
      color: "#3B71F3",
    },
    container_span: {
      bottom:50,
      width: "100%",
      height: 70,
      backgroundColor: colours.primary,
    },
    text_span: {
      color: colours.white,
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        marginVertical: 0,
    },

});

export default ButtonCreator
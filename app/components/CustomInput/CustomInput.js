import { View, Text, TextInput, StyleSheet} from 'react-native'
import React from 'react'

import colours from '../../config/colours';

const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
  return (
    <View style = {styles.container}>
      <TextInput value = {value}
      onChangeText = {setValue}
      placeholder={placeholder}
      style = {styles.input}
      secureTextEntry = {secureTextEntry}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colours.white,
        width: "100%",
        borderColor: colours.inputBorderColour,
        borderWidth: 1.5,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginVertical: 5,
    },
    input:{},
})

export default CustomInput
import { View, Text, TextInput, StyleSheet} from 'react-native'
import React from 'react'
import { Controller } from 'react-hook-form';
import colours from '../../config/colours';


const CustomInput = ({control, name, rules = {}, placeholder, secureTextEntry}) => {
  return (
    
    <Controller 
      control = {control}
      name = {name}      
      rules = {{required: true}}
      render = {({field: {value, onChange, onBlur}, fieldState: {error}}) => (
        <View style = {[styles.container, {borderColor: error ? 'red' : colours.inputBorderColour }]}>
      <TextInput 
      value = {value} 
      onChangeText = {onChange} 
      onBlur = {onBlur}
      placeholder = "placeholder" 
      style = {[styles.input, {}]}
      secureTextEntry = {secureTextEntry}
      />
      </View>
      )
    }
    />
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
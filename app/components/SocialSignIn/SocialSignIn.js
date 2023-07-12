import { View, Text } from 'react-native'
import React from 'react'
import SignInButton from '../ButtonCreator/ButtonCreator'

const onSignInFacebookPressed = () =>{
    console.warn("Feature not implemented");
  }
  const onSignInGooglePressed = () =>{
    console.warn("Feature not implemented");
  }
  const onSignInApplePressed = () =>{
    console.warn("Feature not implemented");
  }
  

const SocialSignIn = () => {
  return (
    <>
      <SignInButton text = "Sign in with Facebook" 
        onPress={onSignInFacebookPressed}
        backColour= "#E7EAF4"
        frontColour="#4765A9"
        />
        <SignInButton text = "Sign In with Google" 
        onPress={onSignInGooglePressed}
        backColour= "#FAE9EA"
        frontColour="#DD4D44"
        />
        <SignInButton text = "Sign In with Apple " onPress={onSignInApplePressed}
        backColour= "#e3e3e3"
        frontColour="#363636"
        />
    </>
  );
};

export default SocialSignIn
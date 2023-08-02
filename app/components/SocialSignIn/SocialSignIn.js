import { View, Text } from 'react-native'
import React from 'react'
import SignInButton from '../ButtonCreator/ButtonCreator'
import { SignInGoogle } from '../../config/firebase';
import LocationScreen from '../../screens/Location/LocationScreen';
import { useNavigation } from '@react-navigation/native';

const SocialSignIn = () => {
  const navigation = useNavigation();

  const onSignInApplePressed = () => {
    navigation.navigate("Location");
  };

  const onSignInFacebookPressed = () => {
    console.warn('Feature not implemented');
  };

  const onSignInGooglePressed = () => {
    SignInGoogle(); // Make sure SignInGoogle() is defined and handles the Google sign-in logic
  };

  return (
    <>
      <SignInButton
        text="Sign in with Facebook"
        onPress={onSignInFacebookPressed}
        backColour="#E7EAF4"
        frontColour="#4765A9"
      />
      <SignInButton
        text="Sign In with Google"
        onPress={onSignInGooglePressed}
        backColour="#FAE9EA"
        frontColour="#DD4D44"
      />
      <SignInButton
        text="Sign In with Apple"
        onPress={onSignInApplePressed}
        backColour="#e3e3e3"
        frontColour="#363636"
      />
    </>
  );
};

export default SocialSignIn;

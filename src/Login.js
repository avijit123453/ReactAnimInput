import {
  View,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import React, {useRef, useState} from 'react';
import { BasicTextInput, TextInputAnim } from './main';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');


  
  const passwordRef = useRef(null);
  const confirmPassRef = useRef(null);
  const [emailError, setEmailError] = useState('');
  const [passError, setPassError] = useState('');
  const [cpassError, setCPassError] = useState('');

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Invalid email address');
    } else if (email.toLowerCase() == 'avijit@gmail.com') {
      setEmailError('Email Already Exists!');
    } else {
      setEmailError('');
    }
  };

  const validatePassword = () => {
    if (password.length < 8) {
      setPassError('Password must be at least 8 characters');
    } else {
      setPassError('');
    }
  };

  const validateConfirmPassword = () => {
    if (password.length < 8) {
      setCPassError('Password must be at least 8 characters');
    } else if (password !== confirmPassword) {
      setCPassError('The password and confirmation password do not match.');
    } else {
      setCPassError('');
    }
  };

  function validation() {
    console.log('validation');
    Keyboard.dismiss();
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <KeyboardAvoidingView
          style={{
            paddingVertical: 30,
            alignItems: 'center',
          }}>
          <TextInputAnim
            backgroundColor="white"
            onChangeText={txt => {
              setEmail(txt);
            }}
            value={email}
            placeholder="Email"
            returnKeyType="next"
            keyboardType="email-address"
            onSubmitEditing={() => {
              if (passwordRef.current) {
                passwordRef.current.focus();
              }
            }}
            // email auto checking
            inputType={'email'}
            emailAutoChecked={true}
            // show error message
            showErrorMessage={true}
            errorMessage={emailError}
            clearMessage={() => setEmailError('')}
            onBlur={() => validateEmail()}
            // addleftIcon={true}
            // lefticon={{uri: 'https://cdn-icons-png.flaticon.com/128/646/646094.png'}}
            // tintColor='grey'
          />

          <TextInputAnim
            backgroundColor="white"
            onChangeText={setPassword}
            value={password}
            placeholder="Password"
            ref={passwordRef}
            returnKeyType="next"
            onSubmitEditing={() => {
              if (confirmPassRef.current) {
                confirmPassRef.current.focus();
              }
            }}
            // hide password
            inputType={'password'}
            visibleIcons={true}
            // show error message
            showErrorMessage={true}
            errorMessage={passError}
            clearMessage={() => setPassError('')}
            onBlur={() => validatePassword()}
            // addleftIcon={true}
            // lefticon={{uri: 'https://cdn-icons-png.flaticon.com/128/3064/3064155.png'}}
            // tintColor='grey'
          />

          <BasicTextInput
            backgroundColor="white"
            onChangeText={setConfirmPassword}
            value={confirmPassword}
            placeholder="Confirm Password"
            ref={confirmPassRef}
            // hide password
            inputType={'password'}
            visibleIcons={true}
            // show error message
            showErrorMessage={true}
            errorMessage={cpassError}
            clearMessage={() => setCPassError('')}
            onSubmitEditing={() => validation()}
            onBlur={() => validateConfirmPassword()}
            // addleftIcon={true}
            // lefticon={{uri: 'https://cdn-icons-png.flaticon.com/128/3064/3064155.png'}}
            // tintColor='grey'
          />

          <TouchableOpacity
            onPress={() => validation()}
            style={{
              borderRadius: 8,
              height: 45,
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 1,
              borderColor: 'grey',
              width: '90%',
              marginVertical: 30,
            }}>
            <Text style={{}}>Login</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Login;

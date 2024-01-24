import {View, TouchableOpacity, Text} from 'react-native';
import React, {useRef, useState} from 'react';
import TextInputAnim from './main';

const Register = ({navigation, route}) => {
  const {mail} = route?.params;

  const [email, setEmail] = useState(mail);
  const [password, setPassword] = useState('');

  const passwordRef = useRef(null);

  return (
    <View
      style={{
        flex: 1,
        paddingVertical: 30,
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <TextInputAnim
        backgroundColor="white"
        onChangeText={setEmail}
        value={email}
        placeholder="Email"
        returnKeyType="next"
        onSubmitEditing={() => {
          if (passwordRef.current) {
            passwordRef.current.focus();
          }
        }}
        keyboardType="email-address"
        showErrorMessage={true}
        errorMessagePosition="right"
      />

      <TextInputAnim
        backgroundColor="white"
        onChangeText={setPassword}
        value={password}
        placeholder="Password"
        ref={passwordRef}
      />
    </View>
  );
};

export default Register;

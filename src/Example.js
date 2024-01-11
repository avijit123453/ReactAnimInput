import React, {useState} from 'react';
import { Text,SafeAreaView } from 'react-native';
import TextInputAnim from './main';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        marginTop: 60
      }}>

        <Text style={{
          marginVertical: 60
        }}>Login</Text>

      <TextInputAnim
        value={email}
        onChangeText={email => setEmail(email)}
        marginVertical={10}
        placeholder={'Email'}
        activeColor={'green'}
        fontSize={15}
        height={48}
        width={'90%'}
        color={'black'}
      />

      <TextInputAnim
        value={password}
        onChangeText={email => setPassword(email)}
        marginVertical={10}
        placeholder={'Password'}
      />

      <TextInputAnim
        value={confirmPassword}
        onChangeText={email => setConfirmPassword(email)}
        marginVertical={10}
        placeholder={'Confirm Password'}
      />
    </SafeAreaView>
  );
};

export default Login;

# React-Native-Anim-input

# [Important](#Important)
Please note that react-native-reanimated are needed for the library to work, so make sure they are installed in your project.

[react-native-reanimated](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/getting-started/)

Enhance your React Native app's user experience with the React Native Animated Text Input npm package. This powerful library seamlessly integrates animated text input components into your application, providing a sleek and dynamic way for users to interact with forms and input fields.

## Result
<p align="left">
 <img width=200 title="Focus" src="https://github.com/avijit123453/ReactAnimInput/assets/99875314/2fad6293-25cd-4c3e-a08b-0894e86349ea">
  <img width=200 title="Add Any value" src="https://github.com/avijit123453/ReactAnimInput/assets/99875314/b4274ac2-48ef-4159-98d5-5edf3d76ec5f">
 <img width=200 title="Add Any value" src="https://github.com/avijit123453/ReactAnimInput/assets/99875314/ade5e5c3-f1fe-4d32-b4a9-e8ecad9c47f0">
</p>

## Usage

Import library

```javascript
import TextInputAnim from 'react-native-anim-input'
```
## Basic
<p align="left">
 <img width=200 title="Video" src="https://github.com/avijit123453/ReactAnimInput/assets/99875314/a4461d98-5da1-424d-aceb-fa3755a0da95">
</p>

Single
```javascript
<TextInputAnim
  onChangeText={txt => {
    setName(txt);
  }}
  value={name}
  placeholder="Name"
  backgroundColor="white"
  marginTop={30}
/>
```
## Example
```javascript
import {
  View,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native';
import React, {useState} from 'react';
import TextInputAnim from 'react-native-anim-input';

const Example = () => {
  const [name, setName] = useState('');

  return (
    <View
      style={{
        flex: 1,
      }}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <KeyboardAvoidingView
          style={{
            flex: 1,
            alignItems: 'center',
            backgroundColor: 'white',
          }}>
          <TextInputAnim
            onChangeText={txt => {
              setName(txt);
            }}
            value={name}
            placeholder="Name"
            backgroundColor="white"
            marginTop={30}
          />
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Example;
```
### Auto Check Valid Email

| Property                                |                   Type                  |                 description                  |   
| --------------------------------------- | :-------------------------------------- | :------------------------------------------- |
| inputType*                              |            string                       |                email,Password                |
| emailAutoChecked*                       |            boolen                       |                     true                     |
| icons ( optional )                                  |                  Array                  | [{uri: 'https://cdn-icons-png.flaticon.com/128/4436/4436481.png'},{uri: 'https://cdn-icons-png.flaticon.com/128/9068/9068699.png'}] or [require('./image/clear.png'),require('./image/check.png')]|

<p align="left">
 <img width=200 title="Video" src="https://github.com/avijit123453/ReactAnimInput/assets/99875314/f1a4cd6c-e1b8-4acc-8b80-64978001d843">
 <img width=200 title="Video" src="https://github.com/avijit123453/ReactAnimInput/assets/99875314/8f15621e-0fa1-4bd9-9c9a-6883b386050b">
</p>

## Usage
```javascript
  <TextInputAnim
    backgroundColor="white"
    onChangeText={txt => {
      setEmail(txt);
    }}
    value={email}
    placeholder="Email"
    inputType={'email'}
    emailAutoChecked={true}
    // icons={[
    //   {uri: 'https://cdn-icons-png.flaticon.com/128/4436/4436481.png'},
    //   {uri: 'https://cdn-icons-png.flaticon.com/128/9068/9068699.png'}
    // ]}
  />
```

### Secure Password
| Property                                |                   Type                  |                 description                  |   
| --------------------------------------- | :-------------------------------------- | :------------------------------------------- |
| inputType*                              |                  string                 |                email,Password                |
| visibleIcons                            |                  boolen                 |                     true                     |
| icons ( optional )                      |                  Array                  | [{uri: 'https://cdn-icons-png.flaticon.com/128/565/565654.png'},{uri: '[https://cdn-icons-png.flaticon.com/128/9068/9068699.png](https://cdn-icons-png.flaticon.com/128/4202/4202406.png)'}] or [require('./image/show.png'),require('./image/hide.png')]|

<p align="left">
 <img width=200 title="Video" src="https://github.com/avijit123453/ReactAnimInput/assets/99875314/cf243179-bbb6-4ba3-90a2-254dd0929681">
 <img width=200 title="Video" src="https://github.com/avijit123453/ReactAnimInput/assets/99875314/e652185e-2b05-4929-baf0-50d1e933a8e6">
</p>

## Usage
```javascript
  <TextInputAnim
    backgroundColor="white"
    onChangeText={txt => {
      setPassword(txt);
    }}
    value={password}
    placeholder="Password"
    inputType={'password'}
    visibleIcons={true}
    // icons={[
    //   {uri: 'https://cdn-icons-png.flaticon.com/128/565/565654.png'},
    //   {uri: 'https://cdn-icons-png.flaticon.com/128/4202/4202406.png'}
    // ]}
  />
```
### Add Error Meessage
| Property                                |                   Type                  |                 description                  |   
| --------------------------------------- | :-------------------------------------- | :------------------------------------------- |
| showErrorMessage*                       |                  boolen                 |                     true                     |
| errorMessage*                           |                  string                 |             add your error message           |
| clearMessage*                           |                 function                |            clear your error message          |
| onBlur ( optional )                     |                 function                |       add your validation functionality      |

<p align="left">
 <img width=200 title="Video" src="https://github.com/avijit123453/ReactAnimInput/assets/99875314/12de3970-1dfd-40df-a748-76eeb51be4f0">
 <img width=200 title="Video" src="https://github.com/avijit123453/ReactAnimInput/assets/99875314/769007e1-2d1f-471f-9439-ddc6f00b7f99">
</p>

## Example
```javascript
import {
  View,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import React, {useRef, useState} from 'react';
import TextInputAnim from 'react-native-anim-input';

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
          />

          <TextInputAnim
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
```

### Request Object

| Property ( Required )                   |                   Type                  | 
| --------------------------------------- | :-------------------------------------- |
| value                                   |                 string                  |
| onChangeText                            |                function                 |


| Property ( default )                    |                   Type                  | 
| --------------------------------------- | :-------------------------------------- |
| height                                  |                  number                 |
| width                                   |                  number                 |
| onKeyPress                              |                 function                |
| marginVertical                          |                  number                 |
| keyboardType                            |                  string                 |
| returnKeyType                           |                  string                 |
| secureTextEntry                         |                  boolen                 |
| maxLength                               |                  number                 |
| autoFocus                               |                 function                |
| editable                                |                  boolen                 |
| onSubmitEditing                         |                 function                |
| textAlign                               |                  string                 |
| onFocus                                 |                 function                |
| onBlur                                  |                 function                |
| backgroundColor                         |                  string                 |
| borderRadius                            |                  number                 |
| borderWidth                             |                  number                 |
| borderColor                             |                  string                 |
| fontSize                                |                  number                 |
| placeholder                             |                  string                 |
| paddingHorizontal                       |                  number                 |
| color                                   |                  string                 |
| placeholderTextColor                    |                  string                 |
| activeColor                             |                  string                 |
| fontFamily                              |                  string                 |
| fontWeight                              |                  string                 |
| inputType                               |                  string                 |
| emailAutoChecked                        |                  boolen                 |
| icons                                   |                   array                 |
| visibleIcons                            |                  boolen                 |
| showErrorMessage                        |                  boolen                 |
| errorMessage                            |                  string                 |
| clearMessage                            |                 function                |
| margin                                  |                  number                 |
| marginTop                               |                  number                 |
| marginBottom                            |                  number                 |
| marginLeft                              |                  number                 |
| marginRight                             |                  number                 |
  
# Install

## Step 1

```bash
npm i react-native-anim-input
```

## Step 2

### iOS

```bash
cd ios
pod install
```

### Key Features:

## Smooth Animations:
Elevate the visual appeal of your app by incorporating smooth and elegant animations into your text input fields. Enjoy a seamless transition between states, creating a more engaging and polished user interface.

## Customizable Styles: 
Tailor the appearance of your text input components to match the unique aesthetic of your app. The package offers a wide range of customization options, including font styles, colors, and animation parameters, allowing you to achieve the perfect look and feel.

## Responsive Design:
Ensure a consistent and responsive design across various devices and screen sizes. The React Native Animated Text Input package is built with responsiveness in mind, delivering a consistent user experience regardless of the device being used.

## Intuitive API:
Simplify the integration process with an intuitive and developer-friendly API. The package's well-documented API makes it easy for developers to implement animated text inputs seamlessly, reducing development time and effort.

## Keyboard Interactivity:
Enhance the user interaction with the keyboard through thoughtful animations and transitions. The package provides a set of features that enable you to create a fluid and responsive keyboard experience for users.

## Accessibility:
Prioritize accessibility with the React Native Animated Text Input package. The components are designed to maintain accessibility standards, ensuring that all users, including those with disabilities, can interact with your app effectively.

## Cross-Platform Compatibility:
Cross-Platform Compatibility: Develop applications for both iOS and Android platforms without compromising on performance or design. The React Native Animated Text Input package is built to seamlessly support both major mobile platforms.



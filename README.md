# React-Native-Anim-Textinput

# [Important](#Important)
Please note that react-native-reanimated are needed for the library to work, so make sure they are installed in your project.

[react-native-reanimated](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/getting-started/)

Enhance your React Native app's user experience with the React Native Animated Text Input npm package. This powerful library seamlessly integrates animated text input components into your application, providing a sleek and dynamic way for users to interact with forms and input fields.

## Result
<p align="left">
  <img width=200 title="Default" src="https://github.com/avijit123453/ReactAnimInput/assets/99875314/f25df778-6382-4e7e-8cf2-9834d29f8158">
  <img width=200 title="Focus" src="https://github.com/avijit123453/ReactAnimInput/assets/99875314/2fad6293-25cd-4c3e-a08b-0894e86349ea">
  <img width=200 title="Add Any value" src="https://github.com/avijit123453/ReactAnimInput/assets/99875314/b4274ac2-48ef-4159-98d5-5edf3d76ec5f">
  <img width=200 title="Video" src="https://github.com/avijit123453/ReactAnimInput/assets/99875314/a4461d98-5da1-424d-aceb-fa3755a0da95">
</p>

## Usage

Import library

```javascript
import TextInputAnim from 'react-native-anim-textinput'
```
### Example
Single
```javascript
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
/>;
```
Create login page
```javascript
import React, {useState} from 'react';
import TextInputAnim from 'react-native-anim-input'
import { Text,SafeAreaView } from 'react-native';

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
| secureTextEntry                         |                   bool                  |
| maxLength                               |                  number                 |
| autoFocus                               |                 function                |
| editable                                |                   bool                  |
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



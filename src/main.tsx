import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState, forwardRef, memo, useCallback} from 'react';
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {AnimDefault, InputAnimType} from './Types';
import {validateEmail} from './valid';
import Images from './Images';

export const TextInputAnim = forwardRef<TextInput, InputAnimType>(
  (
    {
      value,
      onChangeText,
      marginVertical,
      onKeyPress,
      keyboardType,
      returnKeyType,
      maxLength,
      autoFocus,
      editable,
      onSubmitEditing,
      textAlign,
      onFocus,
      onBlur,
      width = '90%',
      height = 48,
      backgroundColor = 'white',
      borderRadius = 8,
      borderWidth = 1,
      borderColor = '#dcdcdc',
      fontSize = 15,
      placeholder = '',
      paddingHorizontal = 15,
      color = 'black',
      placeholderTextColor = 'grey',
      activeColor = 'green',
      fontWeight,
      fontFamily,
      textContentType,
      marginHorizontal,
      errorColor = 'red',
      errorTextFontSize = 12,
      errorTextfontFamily,
      showErrorMessage = false,
      errorMessagePosition = 'right',
      errorMessage = '',
      emailAutoChecked = false,
      icons,
      clearMessage,
      inputType,
      secureTextEntry = false,
      visibleIcons = false,
      margin,
      marginTop,
      marginBottom,
      marginLeft,
      marginRight,
      addleftIcon,
      lefticon,
      tintColor,
    },
    ref,
  ) => {
    let ICON1 = undefined;
    let ICON2 = undefined;

    if (inputType == 'email') {
      ICON1 = icons?.[0] ? icons?.[0] : Images.checked;
      ICON2 = icons?.[1] ? icons?.[1] : Images.clear;
    }
    if (inputType == 'password') {
      ICON1 = icons?.[0] ? icons?.[0] : Images.visible;
      ICON2 = icons?.[1] ? icons?.[1] : Images.invisible;
    }

    const [isFocused, setIsFocused] = useState(false);

    let isStart = addleftIcon ? 35 : 15;

    const translateX = useSharedValue(value == '' ? isStart : 30);
    const translateY = useSharedValue(value == '' ? 0 : -25);
    const paddingX = useSharedValue(value == '' ? 0 : 5);
    const isActive = useSharedValue(0);

    // valid
    const isEmailStatus = useSharedValue(value == '' ? 0 : 1);
    const [isValid, setIsValid] = useState(false);
    const [hideText, setHideText] = useState(secureTextEntry);

    const animationConfig = {
      mass: 1,
      damping: 18,
      stiffness: 120,
      overshootClamping: false,
      restSpeedThreshold: 0.001,
      restDisplacementThreshold: 0.001,
    };

    const animatedStyle = useAnimatedStyle(() => {
      return {
        transform: [
          {translateX: translateX.value},
          {translateY: translateY.value},
        ],
        paddingHorizontal: paddingX.value,
      };
    });

    const animationBasic = useAnimatedStyle(() => {
      const _size = interpolate(
        translateX.value,
        [isStart, 30],
        [fontSize, 12],
      );

      return {
        fontSize: _size,
        backgroundColor: backgroundColor,
      };
    });

    useEffect(() => {
      if (isFocused) {
        translateX.value = withSpring(30, animationConfig);
        translateY.value = withSpring(-25, animationConfig);
        paddingX.value = withSpring(5, animationConfig);
      } else if (value == '') {
        translateX.value = withSpring(isStart, animationConfig);
        translateY.value = withSpring(0, animationConfig);
        paddingX.value = withSpring(0, animationConfig);
      }
    }, [isFocused, value]);

    useEffect(() => {
      if (showErrorMessage && errorMessage !== '') {
        isActive.value = withSpring(2, animationConfig);
        isEmailStatus.value = withSpring(1, animationConfig);
        setIsValid(false);
      } else if (showErrorMessage && errorMessage == '' && isFocused) {
        isActive.value = withSpring(1, animationConfig);
        isEmailStatus.value = withSpring(0, animationConfig);
        setIsValid(true);
      }
    }, [showErrorMessage, errorMessage]);

    const animationColor = useAnimatedStyle(() => {
      const _color = interpolateColor(
        isActive.value,
        [0, 1, 2],
        [placeholderTextColor, activeColor, errorColor],
      );
      return {
        color: _color,
      };
    });

    const animationImageStyle = useAnimatedStyle(() => {
      const _color = interpolateColor(
        isEmailStatus.value,
        [0, 1],
        [activeColor, errorColor],
      );
      return {
        tintColor: _color,
      };
    });

    const animationContainer = useAnimatedStyle(() => {
      const _color = interpolateColor(
        isActive.value,
        [0, 1, 2],
        [borderColor, activeColor, errorColor],
      );
      return {
        borderColor: _color,
      };
    });

    const handleInputChange = useCallback(
      (text: string) => {
        if (onChangeText) {
          onChangeText(text);
        }

        if (emailAutoChecked && inputType == 'email' && errorMessage == '') {
          setIsValid(validateEmail(text));
          isEmailStatus.value = withSpring(
            validateEmail(text) ? 0 : 1,
            animationConfig,
          );
        }

        if (text !== value) {
          clear();
        }
      },
      [onChangeText],
    );

    function onInputBlur() {
      if (onBlur) {
        onBlur();
      }
    }

    function onInputFocus() {
      if (onFocus) {
        onFocus();
      }
    }

    function clear() {
      if (clearMessage) {
        clearMessage();
      }
    }

    return (
      <View
        style={{
          width: width,
          justifyContent: 'center',
          backgroundColor: backgroundColor,
          paddingTop: 8,
          marginVertical: marginVertical,
          marginHorizontal: marginHorizontal,
          margin: margin,
          marginTop: marginTop,
          marginBottom: marginBottom,
          marginLeft: marginLeft,
          marginRight: marginRight,
        }}>
        <Animated.View
          style={[
            {
              width: '100%',
              height: height,
              backgroundColor: backgroundColor,
              borderRadius: borderRadius,
              borderColor: borderColor,
              borderWidth: borderWidth,
              alignItems: 'center',
              flexDirection: 'row',
            },
            animationContainer,
          ]}>
          <Animated.Text
            style={[
              {
                fontSize: fontSize,
                position: 'absolute',
                color: placeholderTextColor,
              },
              animatedStyle,
              animationBasic,
              animationColor,
            ]}>
            {placeholder}
          </Animated.Text>

          {addleftIcon ? (
            <View
              style={{
                width: 30,
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                paddingLeft: 10,
              }}>
              <Image
                source={lefticon}
                resizeMode="contain"
                style={{
                  height: 20,
                  width: 20,
                  tintColor: tintColor,
                }}
              />
            </View>
          ) : null}

          <TextInput
            value={value}
            onChangeText={(txt: string) => handleInputChange(txt)}
            style={{
              flex: 1,
              paddingHorizontal: addleftIcon ? 8 : paddingHorizontal,
              fontSize: fontSize,
              color: color,
              fontWeight: fontWeight,
              fontFamily: fontFamily,
              height: '100%',
            }}
            onKeyPress={onKeyPress}
            keyboardType={keyboardType}
            secureTextEntry={visibleIcons ? hideText : secureTextEntry}
            returnKeyType={returnKeyType}
            maxLength={maxLength}
            autoFocus={autoFocus}
            editable={editable}
            textContentType={textContentType}
            onSubmitEditing={onSubmitEditing}
            ref={ref}
            textAlign={textAlign}
            onFocus={() => {
              onInputFocus();
              setIsFocused(true);
              if (errorMessage == '') {
                isActive.value = withSpring(1, animationConfig);
              }
            }}
            onBlur={() => {
              onInputBlur();
              setIsFocused(false);
              if (errorMessage == '') {
                isActive.value = withSpring(0, animationConfig);
              }
            }}
          />
          {emailAutoChecked && value !== '' && inputType == 'email' ? (
            <TouchableOpacity
              disabled={isValid}
              onPress={() => {
                if (inputType == 'email') {
                  clear();
                  isActive.value = withSpring(
                    isFocused ? 1 : 0,
                    animationConfig,
                  );
                  handleInputChange('');
                }
              }}
              style={{
                height: '100%',
                width: 45,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Animated.Image
                source={isValid ? ICON1 : ICON2}
                style={[
                  {
                    resizeMode: 'contain',
                    height: 22,
                    width: 22,
                  },
                  icons ? {} : animationImageStyle,
                ]}
              />
            </TouchableOpacity>
          ) : null}

          {visibleIcons && inputType == 'password' ? (
            <TouchableOpacity
              onPress={() => {
                setHideText(!hideText);
              }}
              style={{
                height: '100%',
                width: 45,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Animated.Image
                source={hideText ? ICON1 : ICON2}
                style={[
                  {
                    resizeMode: 'contain',
                    height: 22,
                    width: 22,
                  },
                ]}
              />
            </TouchableOpacity>
          ) : null}
        </Animated.View>

        {showErrorMessage && errorMessage !== '' ? (
          <Text
            style={{
              alignSelf:
                errorMessagePosition == 'left' ? 'flex-start' : 'flex-end',
              marginHorizontal: 5,
              marginTop: 3,
              fontSize: errorTextFontSize,
              fontFamily: errorTextfontFamily,
              color: errorColor,
            }}>
            {errorMessage}
          </Text>
        ) : null}
      </View>
    );
  },
);

export const BasicTextInput = forwardRef<TextInput, AnimDefault>(
  (
    {
      value,
      onChangeText,
      marginVertical = 15,
      onKeyPress,
      keyboardType,
      returnKeyType,
      maxLength,
      autoFocus,
      editable,
      onSubmitEditing,
      textAlign,
      onFocus,
      onBlur,
      width = '90%',
      height = 45,
      backgroundColor = 'white',
      borderRadius = 8,
      borderWidth = 1,
      borderColor = '#dcdcdc',
      fontSize = 15,
      placeholder = '',
      paddingHorizontal = 0,
      color = 'black',
      placeholderTextColor = 'grey',
      activeColor = 'green',
      fontWeight,
      fontFamily,
      textContentType,
      marginHorizontal,
      errorColor = 'red',
      errorTextFontSize = 12,
      errorTextfontFamily,
      showErrorMessage = false,
      errorMessagePosition = 'right',
      errorMessage = '',
      emailAutoChecked = false,
      icons,
      clearMessage,
      inputType,
      secureTextEntry = false,
      visibleIcons = false,
      margin,
      marginTop,
      marginBottom,
      marginLeft,
      marginRight,
    },
    ref,
  ) => {
    let ICON1 = undefined;
    let ICON2 = undefined;

    if (inputType == 'email') {
      ICON1 = icons?.[0] ? icons?.[0] : Images.checked;
      ICON2 = icons?.[1] ? icons?.[1] : Images.clear;
    }
    if (inputType == 'password') {
      ICON1 = icons?.[0] ? icons?.[0] : Images.visible;
      ICON2 = icons?.[1] ? icons?.[1] : Images.invisible;
    }

    const [isFocused, setIsFocused] = useState(false);

    // let isStart = 15;

    // const translateX = useSharedValue(value == '' ? isStart : 30);
    const translateY = useSharedValue(value == '' ? 0 : -25);
    // const paddingX = useSharedValue(value == '' ? 0 : 5);
    const isActive = useSharedValue(0);

    // valid
    const isEmailStatus = useSharedValue(value == '' ? 0 : 1);
    const [isValid, setIsValid] = useState(false);
    const [hideText, setHideText] = useState(secureTextEntry);

    const animationConfig = {
      mass: 1,
      damping: 18,
      stiffness: 120,
      overshootClamping: false,
      restSpeedThreshold: 0.001,
      restDisplacementThreshold: 0.001,
    };

    const animatedStyle = useAnimatedStyle(() => {
      return {
        transform: [
          // {translateX: translateX.value},
          {translateY: translateY.value},
        ],
        // paddingHorizontal: paddingX.value,
      };
    });

    const animationBasic = useAnimatedStyle(() => {
      const _size = interpolate(translateY.value, [0, -25], [fontSize, 12]);

      return {
        fontSize: _size,
        backgroundColor: backgroundColor,
      };
    });

    useEffect(() => {
      if (isFocused) {
        // translateX.value = withSpring(30, animationConfig);
        translateY.value = withSpring(-25, animationConfig);
        // paddingX.value = withSpring(5, animationConfig);
      } else if (value == '') {
        // translateX.value = withSpring(isStart, animationConfig);
        translateY.value = withSpring(0, animationConfig);
        // paddingX.value = withSpring(0, animationConfig);
      }
    }, [isFocused, value]);

    useEffect(() => {
      if (showErrorMessage && errorMessage !== '') {
        isActive.value = withSpring(2, animationConfig);
        isEmailStatus.value = withSpring(1, animationConfig);
        setIsValid(false);
      } else if (showErrorMessage && errorMessage == '' && isFocused) {
        isActive.value = withSpring(1, animationConfig);
        isEmailStatus.value = withSpring(0, animationConfig);
        setIsValid(true);
      }
    }, [showErrorMessage, errorMessage]);

    const animationColor = useAnimatedStyle(() => {
      const _color = interpolateColor(
        isActive.value,
        [0, 1, 2],
        [placeholderTextColor, activeColor, errorColor],
      );
      return {
        color: _color,
      };
    });

    const animationImageStyle = useAnimatedStyle(() => {
      const _color = interpolateColor(
        isEmailStatus.value,
        [0, 1],
        [activeColor, errorColor],
      );
      return {
        tintColor: _color,
      };
    });

    const animationContainer = useAnimatedStyle(() => {
      const _color = interpolateColor(
        isActive.value,
        [0, 1, 2],
        [borderColor, activeColor, errorColor],
      );
      return {
        borderBottomColor: _color,
      };
    });

    const handleInputChange = useCallback(
      (text: string) => {
        if (onChangeText) {
          onChangeText(text);
        }

        if (emailAutoChecked && inputType == 'email' && errorMessage == '') {
          setIsValid(validateEmail(text));
          isEmailStatus.value = withSpring(
            validateEmail(text) ? 0 : 1,
            animationConfig,
          );
        }

        if (text !== value) {
          clear();
        }
      },
      [onChangeText],
    );

    function onInputBlur() {
      if (onBlur) {
        onBlur();
      }
    }

    function onInputFocus() {
      if (onFocus) {
        onFocus();
      }
    }

    function clear() {
      if (clearMessage) {
        clearMessage();
      }
    }

    return (
      <View
        style={{
          width: width,
          justifyContent: 'center',
          backgroundColor: backgroundColor,
          paddingTop: 8,
          marginVertical: marginVertical,
          marginHorizontal: marginHorizontal,
          margin: margin,
          marginTop: marginTop,
          marginBottom: marginBottom,
          marginLeft: marginLeft,
          marginRight: marginRight,
        }}>
        <Animated.View
          style={[
            {
              width: '100%',
              height: height,
              backgroundColor: backgroundColor,
              // borderRadius: borderRadius,
              borderBottomColor: borderColor,
              borderBottomWidth: borderWidth,
              alignItems: 'center',
              flexDirection: 'row',
            },
            animationContainer,
          ]}>
          <Animated.Text
            style={[
              {
                fontSize: fontSize,
                position: 'absolute',
                color: placeholderTextColor,
              },
              animatedStyle,
              animationBasic,
              animationColor,
            ]}>
            {placeholder}
          </Animated.Text>

          <TextInput
            value={value}
            onChangeText={(txt: string) => handleInputChange(txt)}
            style={{
              flex: 1,
              paddingHorizontal: paddingHorizontal,
              fontSize: fontSize,
              color: color,
              fontWeight: fontWeight,
              fontFamily: fontFamily,
              height: '100%',
            }}
            onKeyPress={onKeyPress}
            keyboardType={keyboardType}
            secureTextEntry={visibleIcons ? hideText : secureTextEntry}
            returnKeyType={returnKeyType}
            maxLength={maxLength}
            autoFocus={autoFocus}
            editable={editable}
            textContentType={textContentType}
            onSubmitEditing={onSubmitEditing}
            ref={ref}
            textAlign={textAlign}
            onFocus={() => {
              onInputFocus();
              setIsFocused(true);
              if (errorMessage == '') {
                isActive.value = withSpring(1, animationConfig);
              }
            }}
            onBlur={() => {
              onInputBlur();
              setIsFocused(false);
              if (errorMessage == '') {
                isActive.value = withSpring(0, animationConfig);
              }
            }}
          />
          {emailAutoChecked && value !== '' && inputType == 'email' ? (
            <TouchableOpacity
              disabled={isValid}
              onPress={() => {
                if (inputType == 'email') {
                  clear();
                  isActive.value = withSpring(
                    isFocused ? 1 : 0,
                    animationConfig,
                  );
                  handleInputChange('');
                }
              }}
              style={{
                height: '100%',
                width: 45,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Animated.Image
                source={isValid ? ICON1 : ICON2}
                style={[
                  {
                    resizeMode: 'contain',
                    height: 22,
                    width: 22,
                  },
                  icons ? {} : animationImageStyle,
                ]}
              />
            </TouchableOpacity>
          ) : null}

          {visibleIcons && inputType == 'password' ? (
            <TouchableOpacity
              onPress={() => {
                setHideText(!hideText);
              }}
              style={{
                height: '100%',
                width: 45,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Animated.Image
                source={hideText ? ICON1 : ICON2}
                style={[
                  {
                    resizeMode: 'contain',
                    height: 22,
                    width: 22,
                  },
                ]}
              />
            </TouchableOpacity>
          ) : null}
        </Animated.View>

        {showErrorMessage && errorMessage !== '' ? (
          <Text
            style={{
              alignSelf:
                errorMessagePosition == 'left' ? 'flex-start' : 'flex-end',
              marginHorizontal: 5,
              marginTop: 3,
              fontSize: errorTextFontSize,
              fontFamily: errorTextfontFamily,
              color: errorColor,
            }}>
            {errorMessage}
          </Text>
        ) : null}
      </View>
    );
  },
);

import {ImageRequireSource, ImageURISource} from 'react-native';

export interface AnimDefault {
  value: string;
  onChangeText: (text: string) => void;
  backgroundColor: string;
  marginVertical?: number;
  onKeyPress?: () => void;
  keyboardType?:
    | 'default'
    | 'number-pad'
    | 'decimal-pad'
    | 'numeric'
    | 'email-address'
    | 'phone-pad'
    | 'url'
    | 'ascii-capable'
    | 'numbers-and-punctuation'
    | 'name-phone-pad'
    | 'twitter'
    | 'web-search'
    | 'visible-password';
  inputType?: 'email' | 'password';
  returnKeyType?: 'default' | 'done' | 'next';
  secureTextEntry?: boolean;
  maxLength?: number;
  autoFocus?: boolean;
  editable?: boolean;
  onSubmitEditing?: () => void;
  textAlign?: 'left' | 'center' | 'right' | undefined;
  onFocus?: () => void;
  onBlur?: () => void;
  width?: any;
  height?: any;
  borderRadius?: number;
  borderWidth?: number;
  borderColor?: string;
  fontSize?: number;
  placeholder?: string;
  paddingHorizontal?: number;
  color?: string;
  placeholderTextColor?: string;
  activeColor?: string;
  errorColor?: string;
  fontWeight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900'
    | undefined;
  fontFamily?: string;
  textContentType?:
    | 'none'
    | 'emailAddress'
    | 'name'
    | 'telephoneNumber'
    | 'password'
    | 'newPassword'
    | undefined;
  marginHorizontal?: number;
  errorTextFontSize?: number;
  errorTextfontFamily?: string;
  showErrorMessage?: boolean;
  errorMessagePosition?: 'left' | 'right';
  errorMessage?: string;
  clearMessage?: () => void;
  emailAutoChecked?: boolean;
  icons?:
    | [ImageURISource | ImageRequireSource, ImageURISource | ImageRequireSource]
    | undefined;
  visibleIcons?: boolean;
  margin?: number;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
}

export interface InputAnimType extends AnimDefault {
  addleftIcon?: boolean;
  lefticon?: ImageURISource | ImageRequireSource;
  tintColor?: string;
}

import React, {useEffect, useState} from 'react';
import Layout from '../../common/components/Layout';
import {
  StyledTextInput,
  StyledView,
  StyledText,
  StyledTouchableOpacity,
} from '../../common/StyledComponents';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Input from './components/Input';
import PasswordInput from './components/PasswordInput';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const [formData, setFormData] = useState(null);
  const [errors, setErrors] = useState({});
  const navigation = useNavigation();

  const submitForm = () => {
    console.log(formData);
  };

  const handleInputChange = (inputName, inputValue) => {
    setFormData(prevState => ({...prevState, [inputName]: inputValue}));
  };

  return (
    <KeyboardAwareScrollView
      style={{backgroundColor: 'white'}}
      contentContainerStyle={{flex: 1}}>
      <StyledView  className="flex-1 p-3 items-center bg-white justify-center">
        <StyledText className="text-4xl my-2">Login</StyledText>
        <Input
          inputName="email"
          placeholder="Enter your email..."
          inputValue={formData?.email}
          handleInputChange={handleInputChange}
          error={errors?.email}
          multiline={false}
        />
        <PasswordInput
          inputName="password"
          placeholder="Enter your password..."
          handleInputChange={handleInputChange}
          inputValue={formData?.password}
          error={errors?.password}
        />
        <StyledTouchableOpacity
          onPress={submitForm}
          className="w-full mb-3 bg-blue-400 p-4 rounded-[18px]">
          <StyledText className="text-center text-white text-[20px]">
            Submit
          </StyledText>
        </StyledTouchableOpacity>
        <StyledTouchableOpacity onPress={() => navigation.navigate('Register')}>
          <StyledText className="text-center text-[16px]">
            Don't have an account?
          </StyledText>
        </StyledTouchableOpacity>
      </StyledView>
    </KeyboardAwareScrollView>
  );
};

export default Login;

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
      <StyledView className="flex-1 p-3 items-center justify-center">
        <StyledText className="text-4xl my-2">Register</StyledText>
        <Input
          inputName="name"
          placeholder="Enter your name..."
          inputValue={formData?.name}
          handleInputChange={handleInputChange}
          error={errors?.name}
          multiline={false}
        />
        <Input
          inputName="surname"
          placeholder="Enter your surname..."
          inputValue={formData?.surname}
          handleInputChange={handleInputChange}
          error={errors?.surname}
          multiline={false}
        />
        <Input
          inputName="about"
          placeholder="Enter your about"
          inputValue={formData?.about}
          handleInputChange={handleInputChange}
          error={errors?.about}
          multiline={false}
        />
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
        <StyledTouchableOpacity onPress={() => navigation.navigate('Login')}>
          <StyledText className="text-center text-[16px]">
            Already have an account?
          </StyledText>
        </StyledTouchableOpacity>
      </StyledView>
    </KeyboardAwareScrollView>
  );
};

export default Login;

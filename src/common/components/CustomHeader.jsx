import React from 'react';
import {
  StyledView,
  StyledText,
  StyledTouchableOpacity,
} from '../StyledComponents';
import {useNavigation} from '@react-navigation/native';

const CustomHeader = ({title}) => {
  const navigation = useNavigation();
  const canGoBack = navigation.canGoBack();
  return (
    <StyledView className="w-full items-center justify-center flex-row bg-cyan-500 p-5">
      {canGoBack && (
        <StyledTouchableOpacity className='absolute left-3' onPress={() => {
          navigation.goBack();
        }}>
          <StyledText className="text-white">{'<-- Go back'}</StyledText>
        </StyledTouchableOpacity>
      )}
      <StyledText className="text-white text-center text-3xl">
        {title}
      </StyledText>
    </StyledView>
  );
};

export default CustomHeader;

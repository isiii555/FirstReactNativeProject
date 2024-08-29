import React from 'react';
import {StyledView, StyledText} from '@common/StyledComponents';
import {StyledTouchableOpacity} from '../../../common/StyledComponents';
import {useNavigation} from '@react-navigation/native';

const UserInfo = ({user}) => {
  const navigation = useNavigation();
  return (
    <StyledTouchableOpacity
      onPress={() => {
        navigation.navigate('Detailspage', {user: user});
      }}
      className="p-3 w-auto bg-white shadow shadow-zinc-500 rounded-lg my-2">
      <StyledText className="mb-1 text-black font-semibold">
        {user.name}
      </StyledText>
      <StyledText className="mb-1 text-black font-light">
        {user.email}
      </StyledText>
      <StyledText className="text-black text-right ">
        {user.company.name}
      </StyledText>
    </StyledTouchableOpacity>
  );
};

export default UserInfo;

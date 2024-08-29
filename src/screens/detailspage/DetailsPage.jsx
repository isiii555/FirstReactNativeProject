import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Layout from '../../common/components/Layout';
import {StyledText, StyledView} from '../../common/StyledComponents';

const DetailsPage = ({route}) => {
  const {user} = route.params;

  return (
    <Layout title="Details">
      <StyledView className = "w-full h-full justify-center items-center">
        <StyledText className = "text-3xl">{user.name}</StyledText>
        <StyledText className = "text-3xl">{user.email}</StyledText>
        <StyledText className = "text-3xl">{user.company.name}</StyledText>
      </StyledView>
    </Layout>
  );
};

export default DetailsPage;

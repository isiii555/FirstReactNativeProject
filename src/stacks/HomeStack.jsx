import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Homepage from '@screens/homepage/Homepage';
import DetailsPage from '../screens/detailspage/DetailsPage';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{headerShown : false}} name="Homepage" component={Homepage} />
      <Stack.Screen options={{headerShown : false}} name="Detailspage" component={DetailsPage} />
    </Stack.Navigator>
  );
};

export default HomeStack;

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/auth/Login';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen options={{headerShown : false}} name = "Login" component={Login}/>
    </Stack.Navigator>
  );
};

export default AuthStack;

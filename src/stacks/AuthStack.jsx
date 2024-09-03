import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/auth/Login';
import Register from '../screens/auth/Register';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen options={{headerShown : false}} name = "Login" component={Login}/>
        <Stack.Screen options={{headerShown : false}} name = "Register" component={Register}/>
    </Stack.Navigator>
  );
};

export default AuthStack;

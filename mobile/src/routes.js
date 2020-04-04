import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  TransitionPresets
} from '@react-navigation/stack';

import SingUp from './pages/Singup'
import Feed from './pages/Feed'
import Login from './pages/Login'



const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      headerMode="none"
      screenOptions={{
        cardOverlayEnabled: true,
        gestureEnabled: true,
        ...TransitionPresets.SlideFromRightIOS
      }} 
      initialRouteName="Login"
    >
      <Stack.Screen
        name="SingUp"
        component={SingUp}   
      />
      <Stack.Screen
        name="Login"
        component={Login}   
      />
      <Stack.Screen
        name="Feed"
        component={Feed}   
        options={{
            gestureEnabled: false,
        }}
      />


    </Stack.Navigator>
  );
}

export default function Routes() {
  return (
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
  );
}

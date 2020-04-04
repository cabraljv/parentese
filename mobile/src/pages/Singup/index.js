import * as React from 'react';
import { Animated, Text, View, StyleSheet, StatusBar } from 'react-native';
import { Button } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  TransitionPresets
} from '@react-navigation/stack';

import Welcome from './Welcome'
import WriteText from './WriteText'
import Info1 from './Info1'
import Info2 from './Info2'
import Info3 from './Info3'



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
    >
      <Stack.Screen
        name="Welcome"
        component={Welcome}   
      />
      <Stack.Screen
        name="WriteText"
        component={WriteText}
      />
      <Stack.Screen
        name="Info1"
        component={Info1}   
      />
      <Stack.Screen
        name="Info2"
        component={Info2}   
      />
      <Stack.Screen
        name="Info3"
        component={Info3}   
      />
    </Stack.Navigator>
  );
}

export default function SingUp() {
  return (
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
  );
}

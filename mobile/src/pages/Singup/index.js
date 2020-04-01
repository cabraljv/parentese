import * as React from 'react';
import { Animated, Text, View, StyleSheet, StatusBar } from 'react-native';
import { Button } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  TransitionSpecs,
  HeaderStyleInterpolators,
} from '@react-navigation/stack';

import Welcome from './Welcome'
import WriteText from './WriteText'
import Info1 from './Info1'
import Info2 from './Info2'
import Info3 from './Info3'


const MyTransition = {
  gestureDirection: 'horizontal',
  transitionSpec: {
    open: TransitionSpecs.TransitionIOSSpec,
    close: TransitionSpecs.TransitionIOSSpec,
  },
  
  headerStyleInterpolator: HeaderStyleInterpolators.forFade,
  cardStyleInterpolator: ({ current, next, layouts }) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            }),
          },
          {
            rotate: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [1, 0],
            }),
          },
          {
            scale: next
              ? next.progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 0.9],
                })
              : 1,
          },
        ],
      },
      overlayStyle: {
        opacity: current.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 0.5],
        }),
      },
    };
  },
};



const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      headerMode="none"
      screenOptions={{
        cardOverlayEnabled: true,
        gestureEnabled: true,
        ...MyTransition,
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

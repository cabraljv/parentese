import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  TransitionPresets
} from '@react-navigation/stack';

import SingUp from './pages/Singup'
import DrawerMain from './pages/DrawerMain'
import Login from './pages/Login'
import Comment from './pages/Comment'
import Quiz from './pages/Quiz';
import QuizQuestion from './pages/QuizQuestion';


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
        name="DrawerMain"
        component={DrawerMain}   
        options={{
            gestureEnabled: false,
        }}
      />
      <Stack.Screen
        name="Comment"
        component={Comment}   
        options={{
            gestureEnabled: false,
            ...TransitionPresets.FadeFromBottomAndroid
        }}
      />
      <Stack.Screen
        name="Quiz"
        component={Quiz}
        options={{
          gestureEnabled: false,
        }}   
      />
      <Stack.Screen
        name="QuizQuestion"
        component={QuizQuestion}
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

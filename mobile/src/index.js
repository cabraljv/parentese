import * as React from 'react';
import { Animated, Text, View, StyleSheet, StatusBar } from 'react-native';
import { Button } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  TransitionSpecs,
  HeaderStyleInterpolators,
} from '@react-navigation/stack';
import SafeAreaFix from './SafeAreaFix';

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

function TestScreen({ navigation }) {
  return (
    <View style={styles.content}>
      <Button
        mode="contained"
        onPress={() => navigation.push('Test2')}
        style={styles.button}>
        Push new screen
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.pop()}
        style={styles.button}>
        Go back
      </Button>
    </View>
  );
}
function TestScreen2({ navigation }) {
  return (
    <View style={styles.content}>
      <Button
        mode="contained"
        onPress={() => navigation.push('Test')}
        style={styles.button}>
        Push new screen2
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.pop()}
        style={styles.button}>
        Go back2
      </Button>
    </View>
  );
}

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      headerMode="none"
      screenOptions={{
        cardOverlayEnabled: true,
        gestureEnabled: true,
        ...MyTransition,
      }}>
      <Stack.Screen
        name="Test"
        component={TestScreen}
        
      />
      <Stack.Screen
        name="Test2"
        component={TestScreen2}
        
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaFix>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </SafeAreaFix>
  );
}

const styles = StyleSheet.create({
  button: {
    margin: 8,
  },
  content: {
    flex: 1,
    padding: 8,
  },
});

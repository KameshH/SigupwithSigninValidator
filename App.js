import { View, Text } from 'react-native'

import React from 'react'
import Signup from './signup'
import Login from './Login'
import HomeScreen from './HomeScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
       <Stack.Navigator  initialRouteName="signup">
      <Stack.Screen name="signup" component={Signup} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  );
};
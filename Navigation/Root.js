import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import LoginScreen from '../Screens/LoginScreen'

const Stack = createStackNavigator()

export default function Root() {
  return (
    <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name='Login' component={LoginScreen} options={{headerShown: false, title: 'Login'}}/>
        
    </Stack.Navigator>
  )
}

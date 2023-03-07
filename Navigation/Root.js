import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import LoginScreen from '../Screens/LoginScreen'
import RegisterScreen from '../Screens/RegisterScreen'
import PatientHomeScreen from '../Screens/PatientHomeScreen'
import DoctorHomeScreen from '../Screens/DoctorHomeScreen'
import FistScreen from '../Screens/FistScreen'

const Stack = createStackNavigator()

export default function Root() {
  return (
    <Stack.Navigator initialRouteName="FirstScreen">
        <Stack.Screen name='FirstScreen' component={FistScreen} options={{headerShown: false}} />
        <Stack.Screen name='Login' component={LoginScreen} options={{headerShown: false, title: 'Login'}}/>
        <Stack.Screen name='Register' component={RegisterScreen} options={{ title: 'Register', headerShown: false}} />
        <Stack.Screen name='PatientHome' component={PatientHomeScreen} options={{title: 'HomePatient', headerShown: false}}/>
        <Stack.Screen name='DoctorHome' component={DoctorHomeScreen} options={{title: 'HomeDoctor'}}/>
    </Stack.Navigator>
  )
}

import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';
import Root from './Navigation/Root';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Root />
    </NavigationContainer>
  );
}
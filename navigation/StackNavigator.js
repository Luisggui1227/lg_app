import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import AboutScreen from '../screens/AboutScreen';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Sobre" component={AboutScreen} />
      {/* Se tiver o componente Extra, certifique-se de importá-lo */}
      {/* <Stack.Screen name="Extra" component={Extra} /> */}
    </Stack.Navigator>
  );
}

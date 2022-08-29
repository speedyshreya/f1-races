// In App.js in a new project

import react from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/Home';
import YearSelection from './src/screens/YearSelection';
const Stack = createNativeStackNavigator();




export default function App() {
  return (
    <>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#621FF7',
          },
          headerTintColor: '#fff',
          headerTitleStyle :{
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen name="Home" component = {HomeScreen} options={{ title: 'HomeScreen' }}/>
        <Stack.Screen name = "YearSelection" component = {YearSelection} options={{ title: 'YearSelection' }}/>
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}




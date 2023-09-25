import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react'
import HomeScreen from './HomeScreen'
import SecondScreen from './SecondScreen'

export default function App() {

  const Stackku=createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stackku.Navigator initialRouteName='Home'>
        <Stackku.Screen
          name='Home'
          component={HomeScreen}
          options={{
            title: 'Home',
            headerTitle: 'Home',
          }}
        />
        <Stackku.Screen
          name='Second'
          component={SecondScreen}
          options={{
            title: 'Second',
            headerTitle: 'Second',
          }}
        />
      </Stackku.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

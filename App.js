import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './component/Home';
import Details from './component/Details';

const Stack = createNativeStackNavigator();

const App = () => {
  return (

      //Création des pages de navigations

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"
        screenOptions={{headerShown:false}}>


        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Details" component={Details}/>
        
        

      </Stack.Navigator>
    </NavigationContainer>
    
  )
}

export default App

const styles = StyleSheet.create({

})
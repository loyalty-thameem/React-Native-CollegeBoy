import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
const Stack = createNativeStackNavigator();

const RootStackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName='Login'>
            <Stack.Screen name='Login'
             component={LoginScreen} 
             options={{
               headerShown:false, 
             }}
             />
            <Stack.Screen name='Home' component={HomeScreen} />
        </Stack.Navigator>
    )
}

export default RootStackNavigator

const styles = StyleSheet.create({})
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import StaffScreen from '../screens/StaffScreen';
import CourseScreen from '../screens/CourseScreen';
import StudentScreen from '../screens/StudentScreen';
const Stack = createNativeStackNavigator();

const RootStackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName='Student'
            screenOptions={
                {
                    headerShown: false
                }
               
            }
        >
            <Stack.Screen name='Login'
                component={LoginScreen}

            />
            <Stack.Screen name='Home' component={HomeScreen} />
            <Stack.Screen name='Staff' component={StaffScreen} />
            <Stack.Screen name='Course' component={CourseScreen} />
            <Stack.Screen name='Student' component={StudentScreen} />
        </Stack.Navigator>
    )
}

export default RootStackNavigator

const styles = StyleSheet.create({})
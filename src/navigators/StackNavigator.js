import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View, StyleSheet, Image, TouchableOpacity,Text } from 'react-native';

import Splash from '../screens/Splash';
import Logsign from '../screens/Logsign';
import Sign from '../screens/Sign';
import Otp from '../screens/Otp';
import Email from '../screens/Email';
import CarScreen from '../screens/CarScreen';
import LoginScreen from '../screens/LoginScreen';
import DrawerNavigation from './DrawerNavigator';
import Something from "../screens/Something";
import ComingSoon from "../screens/ComingSoon";
const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={Splash} options={
          {headerShown: false}
          }/>
        <Stack.Screen name="Home" component={DrawerNavigation} 
          options={{headerShown:false}
        }
        />
        <Stack.Screen name="Logsign" component={Logsign} options={
          {headerShown: false}
          } />
          <Stack.Screen name="Something" component={Something} options={
          {headerShown: false}
          } />
          <Stack.Screen name="ComingSoon" component={ComingSoon} options={
          {headerShown: false}
          } />
        <Stack.Screen name="Sign" component={Sign} options={
          {headerShown: false}
          } />
        <Stack.Screen name="Otp" component={Otp} options={
          {headerShown: false}
          } />
        <Stack.Screen name="Email" component={Email} options={
          {headerShown: false}
          } />
        <Stack.Screen name="Login" component={LoginScreen} options={
          {headerShown: false}
          } />
        <Stack.Screen name="Car" component={CarScreen} options={
          {headerShown: false}
          } />
      </Stack.Navigator>
    );
  }
  
export { StackNavigator };
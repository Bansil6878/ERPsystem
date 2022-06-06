import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Admin from '../Screen/Admin/Admin';
import Delar from '../Screen/Delar/Delar';
import Retailer from '../Screen/Retailer/Retailer';
import Salesperson from '../Screen/SalesPerson/Salesperson';
import Home from '../Screen/Home';
import Login from '../Screen/Login';
import Supersaler from "../Screen/Supersaler/Supersaler"

const Stack = createNativeStackNavigator();

const Nav_stack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Admin" component={Admin} />
      <Stack.Screen name="Supersaler" component={Supersaler}/>
      <Stack.Screen name="Delar" component={Delar} />
      <Stack.Screen name="Retailer" component={Retailer} />
      <Stack.Screen name="Salesperson" component={Salesperson} />
      
    </Stack.Navigator>
  );
};

export default Nav_stack;

const styles = StyleSheet.create({});

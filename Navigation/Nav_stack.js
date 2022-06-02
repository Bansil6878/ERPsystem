import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Screen/Home';
import Login from '../Screen/Login';
import Admin from '../Screen/Admin';
import User from '../Screen/User';
import Hr from '../Screen/Hr';
import Inventory_manager from '../Screen/Inventory_manager';
import Delar from '../Screen/Delar';

const Stack = createNativeStackNavigator();

const Nav_stack=()=> {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name='Login' component={Login}/>
      <Stack.Screen name='Admin' component={Admin}/>
      <Stack.Screen name='User' component={User}/>
      <Stack.Screen name='Hr' component={Hr}/>
      <Stack.Screen name='Inventory_manager' component={Inventory_manager}/>
      <Stack.Screen name='Delar' component={Delar}/>
    </Stack.Navigator>
  );
}

    
export default Nav_stack

const styles = StyleSheet.create({})
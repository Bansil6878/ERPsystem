import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Admin from '../Screen/Admin/Admin';
import Delar_details from '../Screen/Delar/Delar_details';
import Retailer from '../Screen/Retailer/Retailer';
import Salesperson from '../Screen/SalesPerson/Salesperson';
import Home from '../Screen/Home';
import Login from '../Screen/Login';
import Supersaler from "../Screen/Supersaler/Supersaler"
import Delar_register from '../Screen/Delar/Delar_register';
import Delar_login from '../Screen/Delar/Delar_login';
import Delar from '../Screen/Delar/Delar';
import Product_details from '../Screen/Supersaler/Product_details';
import Show_request from '../Screen/Supersaler/Show_request';

const Stack = createNativeStackNavigator();

const Nav_stack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Admin" component={Admin} />
      <Stack.Screen name="Supersaler" component={Supersaler}/>
      <Stack.Screen name="Delar_details" component={Delar_details} />
      <Stack.Screen name="Retailer" component={Retailer} />
      <Stack.Screen name="Salesperson" component={Salesperson} />
      <Stack.Screen name='Delar_register' component={Delar_register}/>
      <Stack.Screen name='Delar_login' component={Delar_login}/>
      <Stack.Screen name="Delar" component={Delar} />
      <Stack.Screen name='Product_details' component={Product_details}/>  
      <Stack.Screen name='Show_request' component={Show_request}/>      

    </Stack.Navigator>
  );
};

export default Nav_stack;

const styles = StyleSheet.create({});

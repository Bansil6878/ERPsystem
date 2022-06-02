import { StyleSheet, Text, View,TextInput } from 'react-native'
import React, { useState } from 'react'
import Admin from './Admin'
import User from './User'
import {useNavigation} from "@react-navigation/native";

const Login = () => {

  const navigation=useNavigation();

const [name,setName]=useState('')
const [password,setPassword]=useState('')




const send = () => {

  if(name=="Admin" && password=="Admin"){
    return navigation.navigate('Admin')
  }else if(name=="User" && password=="User"){
    return navigation.navigate('User')
  }
}

  return (
<>
    <View>
      <TextInput placeholder='Enter username' onChangeText={(value)=>setName(value)} />
      <TextInput placeholder='Enter password' onChangeText={(value)=>setPassword(value)} />
      <Text onPress={()=>send()}>submit</Text>
    </View>

</>
  )
}

export default Login

const styles = StyleSheet.create({})
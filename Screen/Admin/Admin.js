import { StyleSheet, Text, TextInput, View,FlatList,ScrollView } from 'react-native'
import React, { useState,useContext } from 'react'
import firestore from "@react-native-firebase/firestore"
import { Context } from '../../Context'


const Admin = () => {

  const {employee,hr,delar}=useContext(Context)

  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [address,setAddress]=useState('')
  const [contact,setContact]=useState('')

  const [name1,setName1]=useState('')
  const [email1,setEmail1]=useState('')
  const [pincode1,setPincode1]=useState('')
  const [address1,setAddress1]=useState('')
  const [contact1,setContact1]=useState('')

  const add = async () => {
    await firestore()
      .collection('Hr')
      .doc()
      .set({
        Name: name,
        Address: address,
        Password:password,
        Contact: contact,
        Email: email
     
      })
      .then(
        alert('Hr details are added'),
        console.log('Hr added')
      );
  };


  const addDelar = async () => {
    await firestore()
      .collection('Delar')
      .doc()
      .set({
        Name: name1,
        Address: address1,
        Contact: contact1,
        Email: email1,
        Pincode:pincode1
     
      })
      .then(
        alert('Delar details are added'),
        );
  };


  return (
    <>
    <ScrollView>
    <View>
      <Text style={styles.txt}>Admin</Text>
      <Text style={styles.text}>Enter Hr Details</Text>
      <TextInput placeholder='Entert Hr Name' style={styles.input} onChangeText={(value)=>setName(value)}/>
      <TextInput placeholder='Entert Hr Email' style={styles.input} onChangeText={(value)=>setEmail(value)}/>
      <TextInput placeholder='Entert Hr Password' style={styles.input} onChangeText={(value)=>setPassword(value)}/>
      <TextInput placeholder='Entert Hr Address' style={styles.input} onChangeText={(value)=>setAddress(value)}/>
      <TextInput placeholder='Entert Hr Contact' style={styles.input} onChangeText={(value)=>setContact(value)}/>
      <Text onPress={()=>add()} style={styles.btn}>submit</Text>
    </View>
    
        <Text style={styles.text}>Enter Delar Details</Text>
    <TextInput placeholder='Entert Delar Name' style={styles.input} onChangeText={(value)=>setName1(value)}/>
    <TextInput placeholder='Entert Delar Email' style={styles.input} onChangeText={(value)=>setEmail1(value)}/>
    <TextInput placeholder='Entert Delar Address' style={styles.input} onChangeText={(value)=>setAddress1(value)}/>
    <TextInput placeholder='Entert Delar Pincode' style={styles.input} onChangeText={(value)=>setPincode1(value)}/>
    <TextInput placeholder='Entert Delar Contact' style={styles.input} onChangeText={(value)=>setContact1(value)}/>
    <Text onPress={()=>addDelar()} style={styles.btn}>submit</Text>


          <View style={{marginTop:20,backgroundColor:'green'}}>
            <Text style={{color:'white',marginBottom:10}}>Manager Details</Text>
          <FlatList data={employee} renderItem={({item})=>{
            return (<>
            <Text style={{color:'white'}}>Name: {item.Name}</Text>
            <Text style={{color:'white'}}>Email: {item.Email}</Text>
            <Text style={{color:'white'}}>Contact: {item.Contact}</Text>
            <Text style={{color:'white'}}>Role: {item.Role}</Text>
              <View style={styles.divider}></View>
            </>)
          }}/>
          </View>


          <View style={{marginTop:20,backgroundColor:'blue'}}>
            <Text style={{color:'white',marginBottom:10}}>Hr Details</Text>
          <FlatList data={hr} renderItem={({item})=>{
            return (<>
            <Text style={{color:'white'}}>Name: {item.Name}</Text>
            <Text style={{color:'white'}}>Email: {item.Email}</Text>
            <Text style={{color:'white'}}>Contact: {item.Contact}</Text>
            <Text style={{color:'white'}}>Role: {item.Address}</Text>
          <View style={styles.divider}></View>

            </>)
          }}/>
          </View>


          <View style={{marginTop:20,backgroundColor:'pink'}}>
            <Text style={{color:'white',marginBottom:10}}>Delar Details</Text>
          <FlatList data={delar} renderItem={({item})=>{
            return (<>
            <Text style={{color:'white'}}>Name: {item.Name}</Text>
            <Text style={{color:'white'}}>Email: {item.Email}</Text>
            <Text style={{color:'white'}}>Contact: {item.Contact}</Text>
            <Text style={{color:'white'}}>Role: {item.Address}</Text>
            <Text style={{color:'white'}}>Role: {item.Pincode}</Text>
              <View style={styles.divider}></View>

            </>)
          }}/>
          </View>

    </ScrollView>
    </>
  )
}

export default Admin

const styles = StyleSheet.create({
  input: {
    width: 300,
    height: 50,
    margin: 10,
    borderColor: 'purple',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  dropdown: {
    width: 300,
    height: 50,
    margin: 10,
    borderColor: 'purple',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  btn: {
    width: 100,
    height: 50,
    margin: 10,
    borderColor: 'purple',
    textAlign: 'center',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    color: 'white',
    backgroundColor: 'purple',
  },
  txt: {
    fontSize: 30,
    margin: 10,
    color: 'purple',
  },
  text: {
    fontSize: 20,
    margin: 10,
    color: 'blue',
  },
  divider: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    margin: 10,
    width:360,
    marginLeft:-1,
  },



})
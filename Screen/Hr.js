import { StyleSheet, Text, TextInput, View, FlatList } from 'react-native'
import React, { useState,useContext } from 'react'
import firestore from "@react-native-firebase/firestore"
import { Context } from '../Context'


const Hr = () => {
 
const{employee}=useContext(Context)

    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[role,setRole]=useState('')
    const[contact,setContact]=useState('')
    
 
    const add = async () => {
      await firestore()
        .collection('Employee')
        .doc()
        .set({
          Name: name,
          Email: email,
          Contact: contact,
           Role:role
       
        })
        .then(
          alert('Employee details are added'),
          console.log('Employee added')
        );
    };

    
    return (<>
    <View>
      <Text style={styles.txt}>Hr</Text>
<TextInput placeholder='Entert Name' style={styles.input} onChangeText={(value)=>setName(value)}/>
<TextInput placeholder='Entert Email' style={styles.input} onChangeText={(value)=>setEmail(value)}/>
<TextInput placeholder='Entert Contact' style={styles.input} onChangeText={(value)=>setContact(value)}/>
<TextInput placeholder='Entert Role' style={styles.input} onChangeText={(value)=>setRole(value)}/>
<Text onPress={()=>add()} style={styles.btn}>submit</Text>
    </View>

    <View style={{marginTop:20,backgroundColor:'green'}}>
            <Text style={styles.text}>Manager Details</Text>
          <FlatList data={employee} renderItem={({item})=>{
            return (<>
            <Text style={{color:'white'}}>Name: {item.Name}</Text>
            <Text style={{color:'white'}}>Email: {item.Email}</Text>
            <Text style={{color:'white'}}>Contact: {item.Contact}</Text>
            <Text style={{color:'white'}}>Role: {item.Role}</Text>

            </>)
          }}/>
          </View>
    </>
  )
}

export default Hr

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

})
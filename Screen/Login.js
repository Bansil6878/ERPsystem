import {FlatList, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState, useEffect, useContext} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import firestore from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';
import {Context} from '../Context';

const Login = () => {
  const {product} = useContext(Context);

  const navigation = useNavigation();

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Admin', value: 'Admin'},
    {label: 'Super Saler', value: 'Super Saler'},
    {label: 'Delar', value: 'Delar'},
    {label: 'Retailer', value: 'Retailer'},
    {label: 'Sales Person', value: 'Sales Person'},
  ]);

  const [password, setPassword] = useState('');
  const send = () => {
    if (value == 'Admin' && password == 'Admin') {
      return navigation.navigate('Admin');
    }
    if (value == 'Super Saler' && password == 'Ss') {
      return navigation.navigate('Supersaler');
    }
    if (value == 'Delar' && password == 'Delar') {
      return navigation.navigate('Delar');
    }
    if (value == 'Retailer' && password == 'Retailer') {
      return navigation.navigate('Retailer');
    }
    if (value == 'Sales Person' && password == 'Sp') {
      return navigation.navigate('Salesperson');
    }
  };

  return (
    <>
    <View>
        <Text style={{fontFamily: 'serif',fontSize:35,marginTop:150,marginLeft:120}}> Login </Text>

    </View>

      <View>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          style={styles.dropdown}
          placeholder="selcet your role"
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          onChangeText={value => setPassword(value)}
        />
        <Text onPress={() => send()} style={styles.btn}>
          submit
        </Text>
      </View>
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  input: {
    width: 300,
    height: 50,
    margin: 10,
    borderColor: 'purple',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginLeft:28
  },
  dropdown: {
    width: 300,
    height: 50,
    margin: 10,
    marginTop:50,
    marginLeft:28,
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
    marginLeft:120,
    marginTop:30
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
    width: 360,
    marginLeft: -1,
  },
});

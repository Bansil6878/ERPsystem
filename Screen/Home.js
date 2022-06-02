import {FlatList, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState, useEffect, useContext} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import firestore from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';
import User from './User';
import {Context} from '../Context';

const Home = () => {
  const {product} = useContext(Context);

  const navigation = useNavigation();

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Admin', value: 'Admin'},
    {label: 'User', value: 'User'},
    {label: 'Hr', value: 'Hr'},
    {label: 'Inventory Manger', value: 'Inventory Manager'},
    {label: 'Delar', value: 'Delar'},
  ]);

  const [password, setPassword] = useState('');
  const send = () => {
    if (value == 'Admin' && password == 'Admin') {
      return navigation.navigate('Admin');
    }
    if (value == 'User' && password == 'User') {
      return navigation.navigate('User');
    }
    if (value == 'Hr' && password == 'Hr') {
      return navigation.navigate('Hr');
    }
    if (value == 'Inventory Manager' && password == '123456') {
      return navigation.navigate('Inventory_manager');
    }
    if (value == 'Delar' && password == 'Delar') {
      return navigation.navigate('Delar');
    }
  };

  return (
    <>
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

        <View>
          <Text style={styles.txt}>Inventory</Text>
          <View style={{marginTop: 20, backgroundColor: 'purple'}}>
            <Text style={styles.text}>Product Details</Text>
            <FlatList
              data={product}
              renderItem={({item}) => {
                return (
                  <>
                    <Text style={{color: 'white'}}>
                      ProductId: {item.ProductId}
                    </Text>
                    <Text style={{color: 'white'}}>
                      ProductName: {item.ProductName}
                    </Text>
                    <Text style={{color: 'white'}}>
                      ProductQuantity: {item.ProductQuantity}
                    </Text>
                    <Text style={{color: 'white'}}>
                      ProductPrice: {item.ProductPrice}
                    </Text>
                    <Text style={{color: 'white'}}>
                      ProductTotalPrice: {item.productTotalPrice}
                    </Text>
                    <View style={styles.divider}></View>
                  </>
                );
              }}
            />
          </View>
        </View>
      </View>
    </>
  );
};

export default Home;

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
    width: 360,
    marginLeft: -1,
  },
});

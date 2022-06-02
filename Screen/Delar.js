import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  ScrollView,
} from 'react-native';
import React, {useState, useContext} from 'react';
import {Context} from '../Context';
import firestore from '@react-native-firebase/firestore';

const Delar = () => {
  const {product} = useContext(Context);

  const [productId, setProductId] = useState('');
  const [ProductName, setProductName] = useState('');
  const [productQuantity, setProductQuantity] = useState('');

  const add = async () => {
    await firestore()
      .collection('Product Request')
      .doc()
      .set({
        ProductName: ProductName,
        ProductQuantity: productQuantity,
        ProductId: productId,
      })
      .then(alert('Product request are sended'));
  };

  return (
    <>
      <ScrollView>
        <View>
          <Text style={styles.txt}>Delar</Text>
          <TextInput
            placeholder="Enter Product Id"
            value={productId}
            style={styles.input}
            onChangeText={value => setProductId(value)}
          />
          <TextInput
            placeholder="Enter Product Name"
            value={ProductName}
            style={styles.input}
            onChangeText={value => setProductName(value)}
          />
          <TextInput
            placeholder="Enter Product Quantity"
            value={productQuantity}
            style={styles.input}
            onChangeText={value => setProductQuantity(value)}
          />
          <Text onPress={() => add()} style={styles.btn}>
            send
          </Text>
        </View>

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
                      ProductTotalPrice: {item.TotalPrice}
                    </Text>
                    <View style={styles.divider}></View>
                  </>
                );
              }}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Delar;

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

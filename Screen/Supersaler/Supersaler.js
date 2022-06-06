import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native';
import React from 'react';
import medicine from '../../assest/Data';
import { useNavigation } from '@react-navigation/native';

const Supersaler = () => {
 
  const navigation=useNavigation();
 
  return (
    <>
  <ScrollView>
      <View>
        <Text style={{fontSize:20,fontWeight:'bold',marginLeft:10}}>Product List</Text>
        <FlatList
          data={medicine}
          renderItem={({item}) => {
            return (
              
              
              <View
              style={{
                flexDirection: 'row',
                backgroundColor: '#fff',
                marginVertical: 9,
                  borderRadius: 10,
                  padding: 12,
                  marginHorizontal: 15,
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,
                  elevation: 5,
                  padding: 10,
                }}>
                  
                  <Image source={item.image} style={styles.imgStyle} />
                

                <View
                  style={{
                    justifyContent: 'flex-end',
                    alignItems: 'flex-start',
                    marginLeft: 25,
                  }}>
                  <Text
                    style={{
                      fontSize: 19,
                      fontWeight: 'bold',
                      width: 120,
                    }}>
                    {item.name}
                  </Text>
                  <Text style={styles.textStyle}>
                    Quantity: {item.quantity}
                  </Text>
                  <Text style={styles.textStyle}>
                    Total Quantity: {item.totalquantity}
                  </Text>
                  <Text style={styles.textStyle}>₹: {item.price}</Text>
                  <Text style={styles.textStyle}>
                    Total Price ₹: {item.totalprice}
                  </Text>
                  <Text style={styles.textStyle}>Ratings: {item.star}</Text>
                  <Text onPress={()=>navigation.navigate('Product_details',{item:item})} style={styles.btn}>See more!</Text>
                </View>
              </View>
            );
          }}
        />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
          <Text style={styles.btnReq} onPress={()=>navigation.navigate('Show_request')}>Show Request</Text>
        <Text style={styles.btnBuy}>Buy</Text>
        <Text style={styles.btnSell}>Sell</Text>
      </View>
          </View>
  </ScrollView>
    </>
  );
};

export default Supersaler;

const styles = StyleSheet.create({
  input: {
    width: 300,
    height: 50,
    margin: 10,
    borderColor: 'purple',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginLeft: 28,
  },
  dropdown: {
    width: 300,
    height: 50,
    margin: 10,
    marginTop: 50,
    marginLeft: 28,
    borderColor: 'purple',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
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
  imgStyle: {
    resizeMode: 'contain',
    width: 150,
    height: 130,
    borderRadius: 10,
  },
  btnBuy: {
    width: 100,
    height: 60,
    margin: 10,
    borderColor: 'purple',
    textAlign: 'center',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    color: 'white',
    backgroundColor: 'purple',
    marginTop:30
  },
  btnSell: {
    width: 80,
    height: 60,
    margin: 10,
    borderColor: 'purple',
    textAlign: 'center',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    color: 'white',
    backgroundColor: 'purple',
    marginTop:30
  },
  btnReq: {
    width: 80,
    height: 60,
    margin: 10,
    borderColor: 'purple',
    textAlign: 'center',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    color: 'white',
    backgroundColor: 'green',
    marginTop:30
  },
  
});

import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
import React from 'react';

const Product_details = ({route}) => {
  const {item} = route.params;

  return (
    <View>
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
            marginTop:-20
          }}>
          {item.name}
        </Text>

        <Text style={styles.textStyle}>Description: {item.des}</Text>
        <Text style={styles.textStyle}>Quantity: {item.quantity}</Text>
        <Text style={styles.textStyle}>
          Total Quantity: {item.totalquantity}
        </Text>
        <Text style={styles.textStyle}>Price ₹: {item.price}</Text>
        <Text style={styles.textStyle}>Total Price ₹: {item.totalprice}</Text>
        <Text style={styles.textStyle}>Ratings: {item.star}</Text>
      </View>
    </View>
  );
};

export default Product_details;

const styles = StyleSheet.create({
  imgStyle: {
    width: 250,
    height: 250,
    marginLeft:50
  },
  textStyle:{
    fontSize:15,
    marginTop:30,
    width:300,
    fontWeight:'700'
  }
});

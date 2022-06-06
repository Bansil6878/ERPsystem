import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Retailer = () => {
  return (
   
   <>
    <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:600}}>
      <Text style={styles.btnBuy}>Buy</Text>
      <Text style={styles.btnSell}>Sell</Text>
    </View>
   </>
  )
}

export default Retailer

const styles = StyleSheet.create({
  btnBuy: {
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
    marginTop:30
  },
  btnSell: {
    width: 100,
    height: 50,
    margin: 10,
    borderColor: 'blue',
    textAlign: 'center',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    color: 'white',
    backgroundColor: 'blue',
    marginTop:30
  },
})
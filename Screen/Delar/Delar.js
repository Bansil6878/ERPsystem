import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Delar = () => {
  return (
  <>
    <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:600}}>
      <Text style={styles.btnBuy}>Buy</Text>
      <Text style={styles.btnSell}>Sell</Text>
    </View>
  
  
  </>
  )
}

export default Delar

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
})
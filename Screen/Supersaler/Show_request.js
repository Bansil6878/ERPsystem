import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {Context} from '../../Context';

const Show_request = () => {

    const {productRequest} = useContext(Context);

  return (
    <>

      <View>
        <Text>Show_request</Text>
      </View>

      <View style={styles.poster}>
        <FlatList
          data={productRequest}
          renderItem={item => {
            return (<>
            <View>

            <View style={{marginLeft: 10, marginTop: 50}}>
            <Image style={styles.image} source={{uri: item.item.Data.Picture}} />
            </View>
                {console.log(item.item.Data.Picture)}

              <View style={{
                  flexDirection: 'column',
                  marginTop: -120,
                  marginLeft: 170}}>
               <Text style={styles.textStyle}>Name: {item.item.Data.Name}</Text>
                <Text style={styles.textStyle}>Company Name: {item.item.Data.Company_Name}</Text>
                <Text style={styles.textStyle}>Address: {item.item.Data.Address}</Text>
                <Text style={styles.textStyle}>Pincode: {item.item.Data.Pincode}</Text>
                <Text style={styles.textStyle}>Contact: {item.item.Data.Contact}</Text>
                <Text style={styles.textStyle}>Data: {item.item.Date}</Text>
              </View>

        </View>
            </>
            );
          }}
        />
      </View>
    </>
  );
};

export default Show_request;

const styles = StyleSheet.create({
  textStyle: {
    marginLeft: -15,
    marginTop: 1,
    fontWeight: 'bold',
    color: '#000',
  },
      poster: {
        borderWidth: 1,
        borderColor: '#84cfc5',
        marginTop: 20,
        width: 350,
        marginLeft: 5,
        height: 170,
        borderRadius: 10,
      },
      image: {
        marginTop: -33,
        width: 120,
        height: 120,
        borderRadius: 7,
      },
     
});

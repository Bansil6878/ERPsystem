import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useEffect, useState, useContext} from 'react';
import firestore from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';

const Delar = () => {
  const navigation = useNavigation();

  const [data, setData] = useState(null);

  useEffect(() => {
    get();
  }, []);

  const get = async () => {
    await firestore()
      .collection('Dealr')
      .doc('Delar_details')
      .get()
      .then(snapShot => {
        if (snapShot.exists) {
          setData(snapShot.data());
          {
            console.log(setData);
          }
        }
      });
    };

const d=new Date().toLocaleDateString();

    const sendReq =async () => {
    await firestore()
    .collection('Delar Request')
    .doc()
    .set({
       Data:data,
       Date:d
      })
      .then(
        alert('your request are send'),
      );

  };

  return (
    <>
      <View style={styles.poster}>
        {data != null && (
          <>
            <View style={{marginLeft: 10, marginTop: 50}}>
              <Image style={styles.image} source={{uri: data.Picture}} />
              <View
                style={{
                  flexDirection: 'column',
                  marginTop: -120,
                  marginLeft: 150,
                }}>
                <Text style={styles.textStyle}>Name: {data.Name}</Text>
                <Text style={styles.textStyle}>
                  Company Name: {data.Company_Name}
                </Text>
                <Text style={styles.textStyle}>Address: {data.Address}</Text>
                <Text style={styles.textStyle}>Pincode :{data.Pincode}</Text>
                <Text style={styles.textStyle}>Contact: {data.Contact}</Text>
                <TouchableOpacity>
                  <Text
                    style={styles.btn}
                    onPress={() => navigation.navigate('Delar_details')}>
                    Edit details
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </>
        )}
      </View>

      <View style={{flexDirection:'row',marginTop:20,marginLeft:10}}>
        <Text style={{fontSize:16}}>Request to show product</Text>
        <TouchableOpacity>
        <Text style={styles.reqBtn} onPress={()=>sendReq()}>Send Request</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Delar;

const styles = StyleSheet.create({
  image: {
    marginTop: -33,
    width: 120,
    height: 120,
    borderRadius: 7,
  },
  textStyle: {
    marginLeft: -15,
    marginTop: 1,
    fontWeight: 'bold',
    color: '#000',
  },
  btn: {
    width: 100,
    height: 20,
    marginLeft: -2,
    marginTop: 10,
    borderColor: 'purple',
    textAlign: 'center',
    borderWidth: 1,
    borderRadius: 10,
    color: 'white',
    backgroundColor: 'purple',
  },
  reqBtn: {
    width: 100,
    height: 20,
    borderColor: 'purple',
    textAlign: 'center',
    borderWidth: 1,
    borderRadius: 7,
    color: 'white',
    backgroundColor: 'purple',
    marginLeft:30
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
});

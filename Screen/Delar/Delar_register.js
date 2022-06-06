import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

const Delar_register = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const add = async () => {
    await auth()
      .createUserWithEmailAndPassword(email, password)
      .then(
        alert('Data Added'),
        console.log('User Login '),
        navigation.replace('Delar_login'),
      )
      .catch(e => alert(e));
  };

//   useEffect(() => {
//     const unsubscribe = auth().onAuthStateChanged(user => {
//       if (user) {
//         navigation.replace('Delar_details');
//       }
//     });
//     return unsubscribe;
//   }, []);

  return (
    <View>
      <ScrollView>
        <View>
          <Text
            style={{
              fontFamily: 'serif',
              fontSize: 35,
              marginTop: 150,
              marginLeft: 60,
            }}>
            Delar register
          </Text>
        </View>

        <View style={styles.poster}>
          <TextInput
            style={styles.txtInputStyles}
            placeholder="Enter Your Email"
            value={email}
            onChangeText={text => setEmail(text)}
          />

          <TextInput
            style={styles.txtInputStyles}
            placeholder="Enter Your Password"
            value={password}
            onChangeText={text => setPassword(text)}
          />

          <TouchableOpacity>
            <Text onPress={add} style={styles.btnStyle}>
              Submit
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{flexDirection: 'row'}}
            onPress={() => navigation.navigate('Delar_login')}>
            <Text
              style={{
                marginTop: 32,
                marginLeft: 110,
                fontStyle: 'italic',
                color: 'green',
              }}>
              Already user?
            </Text>
            <Text
              style={{
                marginTop: 32,
                color: 'blue',
                fontStyle: 'italic',
                marginLeft: 8,
              }}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Delar_register;

const styles = StyleSheet.create({
  txtInputStyles: {
    borderWidth: 0.8,
    borderColor: '#84cfc5',
    borderRadius: 10,
    marginTop: 10,
    marginHorizontal: 10,
    width: 310,
    padding: 9,
    color: 'black',
  },
  poster: {
    borderWidth: 2,
    borderRadius: 20,
    borderColor: '#84cfc5',
    marginTop: 50,
    width: 340,
    marginLeft: 10,
    height: 250,
  },
  btnStyle: {
    borderWidth: 0.8,
    borderRadius: 5,
    borderColor: '#84cfc5',
    marginTop: 10,
    marginHorizontal: 10,
    width: 80,
    textAlign: 'center',
    marginTop: 32,
    marginLeft: 125,
  },
});

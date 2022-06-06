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
  
  const Delar_login = () => {
    const navigation = useNavigation();
  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const add = async () => {
      await auth()
        .signInWithEmailAndPassword(email, password)
        .then(userdetails => {
          const user = userdetails.user;
          console.log(user.email);
          navigation.navigate('Delar');
        })
        .catch(e => alert('Invaild email or Password'));
    };
  
    // useEffect(() => {
    //   const unsubscribe = auth().onAuthStateChanged(user => {
    //     if (user) {
    //       navigation.replace('Delar_register');
    //     }
    //   });
    //   return unsubscribe;
    // }, []);
  
    return (
      <View>
      
  
        <ScrollView>
        <View>
          <Text
            style={{
              fontFamily: 'serif',
              fontSize: 35,
              marginTop: 150,
              marginLeft: 80,
            }}>
            Delar Login
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
              secureTextEntry
            />
  
            <TouchableOpacity onPress={add}>
              <Text style={styles.btnStyle}>Submit</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  };
  
  export default Delar_login;
  
  const styles = StyleSheet.create({
    image: {
      flex: 1,
      justifyContent: 'center',
      height: 700,
    },
    imgStyle: {
      height: 400,
      width: 355,
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
  
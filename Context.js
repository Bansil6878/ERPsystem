import {StyleSheet, Text, View} from 'react-native';
import React, {createContext, useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';


export const Context = createContext();
export function DataProvider(props) {

  const[productRequest,setProductRequest]=useState([]);


  useEffect(() => {
    getProductRequest()
  }, []);

  
  const getProductRequest= async () => {
    await firestore()
      .collection('Delar Request')
      .get()
      .then(snapShot => {
        const datas = [];
        snapShot.forEach(doc => {
          datas.push(doc.data());
          
        });
        setProductRequest(datas);
      });
  };


  return (
    <Context.Provider value={{productRequest}}>{props.children}</Context.Provider>
  );
}

const styles = StyleSheet.create({});

import {StyleSheet, Text, View} from 'react-native';
import React, {createContext, useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';


export const Context = createContext();
export function DataProvider(props) {


  const [employee, setEmployee] = useState([]);
  const [hr,setHr]=useState([]);
  const [product,setProduct]=useState([]);
  const[delar,setDelar]=useState([]);
  const[productRequest,setProductRequest]=useState([]);


  useEffect(() => {
    getEmployee()
    getHr()
    getProduct()
    getDelar()
    getProductRequest()
  }, []);

  const getEmployee = async () => {
    await firestore()
      .collection('Employee')
      .get()
      .then(snapShot => {
        const datas = [];
        snapShot.forEach(doc => {
          datas.push(doc.data());
        });
        setEmployee(datas);
      });
  };

  const getHr = async () => {
    await firestore()
      .collection('Hr')
      .get()
      .then(snapShot => {
        const datas = [];
        snapShot.forEach(doc => {
          datas.push(doc.data());
        });
        setHr(datas);
      });
  };

  const getProduct = async () => {
    await firestore()
      .collection('Inventory')
      .get()
      .then(snapShot => {
        const datas = [];
        snapShot.forEach(doc => {
          datas.push(doc.data());
        });
        setProduct(datas);
      });
  };

  const getDelar= async () => {
    await firestore()
      .collection('Delar')
      .get()
      .then(snapShot => {
        const datas = [];
        snapShot.forEach(doc => {
          datas.push(doc.data());
        });
        setDelar(datas);
      });
  };

  const getProductRequest= async () => {
    await firestore()
      .collection('Product Request')
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
    <Context.Provider value={{employee,hr,product,delar,productRequest}}>{props.children}</Context.Provider>
  );
}

const styles = StyleSheet.create({});

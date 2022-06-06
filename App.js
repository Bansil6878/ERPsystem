import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Nav_stack from './Navigation/Nav_stack';
import {DataProvider} from './Context';


const App = () => {
  return (
    <DataProvider>
      <NavigationContainer>
        <Nav_stack />
      </NavigationContainer>
    </DataProvider>
  );
};

export default App;

const styles = StyleSheet.create({});

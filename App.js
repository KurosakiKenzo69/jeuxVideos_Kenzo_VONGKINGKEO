import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Header from './components/Header';
import Filtre from './components/Filtre';

export default function App() {
  return (
    <View style={styles.container}>
      <Header></Header>
        <Filtre></Filtre>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

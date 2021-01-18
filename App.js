import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Converter from './src/components/Converter'

export default function App() {
  return (
    <View style={styles.container}>
      <Converter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242424',
    alignItems: 'center',
  },
  containerTitle: {
    color: '#ededed',
    fontSize: 64,
    paddingTop: 20,
    flex: 1,
  },
  convertContainer: {
    flex: 1,
  },
});

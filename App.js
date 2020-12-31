import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PoingContainer from './src/container/PoingContainer';
import Navigation from './src/navigations/Navigation';
import 'react-native-gesture-handler';
import Test from './src/components/Test';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <PoingContainer /> */}
      <Navigation />
      {/* <Test /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

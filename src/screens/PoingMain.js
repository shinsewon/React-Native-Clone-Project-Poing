import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import Navigation from '../navigations/Navigation';

export default function PoingMain() {
  return (
    <SafeAreaView>
      <Text style={styles.container}>안녕!</Text>
      <Navigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '80%',
  },
});

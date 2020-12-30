import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import PoingMain from '../screens/PoingMain';
import Navigation from '../navigations/Navigation';

export default function PoingContainer() {
  return (
    <SafeAreaView style={styles.wrap}>
      <PoingMain />
      {/* <Navigation /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
  },
});

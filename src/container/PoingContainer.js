import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import PoingMain from '../screens/PoingMain';

export default function PoingContainer() {
  return (
    <SafeAreaView style={styles.wrap}>
      <PoingMain />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
  },
});

import React from 'react';
import { StyleSheet, View } from 'react-native';
import TiketMain from '../screens/TiketMain';

export default function Tiket() {
  return (
    <View style={styles.wrap}>
      <TiketMain />
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

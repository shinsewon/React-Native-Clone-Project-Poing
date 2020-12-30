import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function MyPoing() {
  return (
    <View style={styles.wrap}>
      <Text>안녕 난 마이포잉</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

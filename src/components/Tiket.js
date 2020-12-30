import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Tiket() {
  return (
    <View style={styles.wrap}>
      <Text>나는 티켓입니다</Text>
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

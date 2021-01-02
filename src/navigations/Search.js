import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import DetailRestaurant from '../screens/DetailRestaurant';
import MainSlide from '../components/DetialRestaurant/MainSlide';

export default function Search() {
  return (
    <View style={styles.wrap}>
      <ScrollView>
        <MainSlide />
        <View style={styles.container}>
          <DetailRestaurant />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
});

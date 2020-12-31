import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { TOTAL_FOOD_PICTURE } from '../../data/data';

export default function TotalFoodCard() {
  const renderItem = (item) => {
    console.log('item 잘 나오냐>>', item);
    return (
      <View style={styles.awardsCardContainer}>
        <Image source={item.src} style={styles.card} resizeMode={'cover'} />
        <Text style={styles.title}>{item.title}</Text>
      </View>
    );
  };

  return (
    <View style={styles.wrap}>
      <FlatList
        data={TOTAL_FOOD_PICTURE}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => renderItem(item)}
        keyboardShouldPersistTaps="always"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    width: '100%',
    height: 180,
    marginTop: 20,
    backgroundColor: 'yellow',
  },
  awardsCardContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 160,
  },
  card: {
    width: 150,
    height: 150,
    overflow: 'hidden',
    borderRadius: 150 / 2,
  },
  title: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: '500',
    color: '#1c2023',
  },
});

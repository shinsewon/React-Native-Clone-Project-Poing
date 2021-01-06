import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import { AWARDS_PICTURE } from '../../data/data';

export default function AwardsCard() {
  const [awardsCard, setAwardsCard] = useState([]);

  useEffect(() => {
    setAwardsCard(AWARDS_PICTURE);
  }, []);

  const renderItem = (item) => {
    return (
      <TouchableOpacity style={styles.awardsCardContainer}>
        <Image source={item.src} style={styles.card} resizeMode="contain" />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.wrap}>
      <FlatList
        data={awardsCard}
        keyExtractor={(item) => item.id.toString()}
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
    width: '100%',
    height: 290,
    marginTop: 50,
  },
  awardsCardContainer: {
    width: 150,
    marginRight: 10,
    height: '100%',
  },
  card: {
    height: '100%',
    borderRadius: 6,
    borderBottomRightRadius: 6,
    borderBottomLeftRadius: 6,
  },
});

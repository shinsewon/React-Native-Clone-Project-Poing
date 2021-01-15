import React from 'react';
import { Rating } from 'react-native-ratings';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import { FontAwesome5 } from 'react-native-vector-icons';
import { RECOMMENDATION_RESTAURANT } from '../../data/data';

export default function ItemCard() {
  const renderItem = (item) => {
    const splitStr = item.description.length >= 5 ? item.description.substr(0, 25) + '・・・' : '';
    return (
      <View style={styles.itemCardContainer}>
        <Image source={item.src} style={styles.card} />
        <Text style={{ fontSize: 14, fontWeight: '500', marginTop: 5 }}>{item.title}</Text>
        <Text style={{ fontSize: 12, color: '#c4bba4', marginTop: 3 }}>{splitStr}</Text>
        <Text style={{ fontSize: 12, color: '#c4bba4', marginTop: 3 }}>{item.place}</Text>
        <View style={styles.scoreContainer}>
          <View style={styles.rateContainer}>
            <Rating startingValue={4} imageSize={13} showRating={false} readonly={true} />
          </View>
          <View style={styles.textContainer}>
            <Text style={{ fontSize: 13, paddingLeft: 3 }}>{item.score}</Text>
            <Text style={{ fontSize: 12, color: '#c4bba4', paddingLeft: 3 }}>
              ({item.comments})
            </Text>
          </View>
        </View>
        <View style={styles.ticketContainer}>
          <FontAwesome5 name="ticket-alt" size={14} color="#EB1719" />
          <Text style={{ fontSize: 11, color: '#EB1719', fontWeight: '700', paddingLeft: 3 }}>
            TICKET
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.wrap}>
      <FlatList
        data={RECOMMENDATION_RESTAURANT}
        keyExtractor={(item) => String(item.id)}
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
    height: 350,
    marginTop: 20,
  },
  itemCardContainer: {
    width: 250,
    height: 350,
    marginRight: 10,
  },
  card: {
    height: 250,
    borderRadius: 6,
    overflow: 'hidden',
  },
  scoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 3,
  },
  rateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: 'auto',
  },
  textContainer: {
    flexDirection: 'row',

    width: 150,
  },
  ticketContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
});

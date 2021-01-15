import React from 'react';
import { StyleSheet, View, Image, ScrollView } from 'react-native';
import { RECTANGLE_CARD } from '../../data/data';

export default function RectangleSlider() {
  return (
    <ScrollView horizontal={true} pagingEnabled={true} showsHorizontalScrollIndicator={false}>
      {RECTANGLE_CARD.map((item) => {
        return (
          <View style={styles.view} key={item.id}>
            <Image source={item.src} resizeMode="contain" style={styles.slideInnerContainer} />
          </View>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginRight: 10,
    width: 200,
    height: 400,
  },
  slideInnerContainer: {
    width: '100%',
    height: 400,
    overflow: 'hidden',
  },
});

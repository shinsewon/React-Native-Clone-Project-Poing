import React from 'react';
import { StyleSheet, View, Image, Dimensions, ScrollView } from 'react-native';
import { RECTANGLE_CARD } from '../../data/data';

export default function RectangleSlider() {
  return (
    // <View style={{ width: 400 }}>
    <ScrollView horizontal={true} pagingEnabled={true} showsHorizontalScrollIndicator={false}>
      {RECTANGLE_CARD.map((item) => {
        return (
          <View style={styles.view} key={item.id}>
            <Image source={item.src} resizeMode="contain" style={styles.slideInnerContainer} />
          </View>
        );
      })}
    </ScrollView>
    // </View>
  );
}

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

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

import React, { useRef } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, Dimensions, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-snap-carousel';
// import Carousel from 'react-native-anchor-carousel';
import { RECTANGLE_CARD } from '../../data/data';

export default function RectangleSlider() {
  const cardRef = useRef(null);

  const handleRenderItem = ({ item, index }) => {
    return (
      <TouchableOpacity>
        <Image source={item.src} resizeMode="contain" style={styles.slideInnerContainer} />
      </TouchableOpacity>
    );
  };

  return (
    <Carousel
      data={RECTANGLE_CARD}
      layout={'default'}
      ref={cardRef}
      sliderWidth={380}
      itemWidth={150}
      renderItem={handleRenderItem}
      // slideStyle={styles.slide}
    />
  );
}

const styles = StyleSheet.create({
  pictureCard: {
    borderRadius: 5,
    height: 250,
  },

  slideInnerContainer: {
    width: '100%',
    height: 300,
    overflow: 'hidden',
  },
});

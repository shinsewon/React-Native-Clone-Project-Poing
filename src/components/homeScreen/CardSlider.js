import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { MAIN_PICTURE } from '../../data/data';

export default function CardSlider() {
  const cardRef = useRef();

  const handleRenderItem = ({ item, index }) => {
    return (
      <View style={styles.slide}>
        <Image source={item.src} resizeMode="contain" style={styles.slideInnerContainer} />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.wrap}>
      <Carousel
        data={MAIN_PICTURE}
        layout={'default'}
        ref={cardRef}
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
        renderItem={handleRenderItem}
        slideStyle={{ marginLeft: -2 }}
      />
    </SafeAreaView>
  );
}

const horizontalMargin = 20;
const slideWidth = 400;
const sliderWidth = Dimensions.get('window').width;
const itemWidth = slideWidth + horizontalMargin * 2;
const itemHeight = 300;

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pictureCard: {
    borderRadius: 5,
    height: 250,
  },
  slide: {
    width: itemWidth,
    height: itemHeight,
    paddingHorizontal: horizontalMargin,
  },
  slideInnerContainer: {
    flex: 1,
    width: slideWidth,
    overflow: 'hidden',
  },
});

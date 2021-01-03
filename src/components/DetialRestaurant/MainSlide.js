import React, { useRef } from 'react';
import { StyleSheet, View, Image, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { MAIN_PICTURE } from '../../data/data';

export default function MainSlide() {
  const cardRef = useRef();
  const handleRenderItem = ({ item, index }) => {
    return (
      <View style={styles.slide}>
        <Image source={item.src} resizeMode="repeat" style={styles.slideInnerContainer} />
      </View>
    );
  };

  return (
    <Carousel
      data={MAIN_PICTURE}
      layout={'default'}
      ref={cardRef}
      sliderWidth={sliderWidth}
      itemWidth={itemWidth}
      renderItem={handleRenderItem}
      slideStyle={{ backgroundColor: 'blue', height: 400 }}
    />
  );
}

const horizontalMargin = 20;
const slideWidth = 400;
const sliderWidth = Dimensions.get('window').width;
const itemWidth = slideWidth + horizontalMargin * 2;
const itemHeight = 300;

const styles = StyleSheet.create({
  slide: {
    width: itemWidth,
    height: itemHeight,
  },
  slideInnerContainer: {
    overflow: 'hidden',
  },
  rightView: {
    flexDirection: 'row',
  },
});

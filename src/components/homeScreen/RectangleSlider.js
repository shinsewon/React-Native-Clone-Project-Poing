import React, { useRef } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { RECTANGLE_CARD } from '../../data/data';

export default function RectangleSlider() {
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
      {/* <Carousel
        data={RECTANGLE_CARD}
        layout={'default'}
        ref={cardRef}
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
        renderItem={handleRenderItem}
        slideStyle={{ marginLeft: -2 }}
      /> */}
      <Carousel
        data={RECTANGLE_CARD}
        layout={'default'}
        ref={cardRef}
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
        renderItem={handleRenderItem}
        slideStyle={{ marginLeft: -2, backgroundColor: 'blue' }}
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

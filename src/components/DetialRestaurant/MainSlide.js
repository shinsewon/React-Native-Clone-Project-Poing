import React, { useRef } from 'react';
import { StyleSheet, View, Image, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { MAIN_PICTURE } from '../../data/data';

export default function MainSlide({ paramsImg }) {
  const cardRef = useRef();
  const handleRenderItem = ({ item, index }) => {
    return (
      <View style={styles.slide}>
        <Image source={item.src} resizeMode="repeat" style={styles.slideInnerContainer} />
      </View>
    );
  };

  // 이 부분 나중에 scrollView 나 flatList해서 만들어서 다시해, 캐러쉘 안좋아
  // const titleImg = MAIN_PICTURE.unshift({ id: 0, title: 'Picture0', src: { item } });

  return (
    <Carousel
      data={MAIN_PICTURE}
      layout={'default'}
      ref={cardRef}
      sliderWidth={sliderWidth}
      itemWidth={itemWidth}
      renderItem={handleRenderItem}
      slideStyle={{ height: 400 }}
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

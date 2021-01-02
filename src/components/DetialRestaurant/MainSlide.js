import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, Dimensions } from 'react-native';
import { AntDesign, Feather } from 'react-native-vector-icons';
import Carousel from 'react-native-snap-carousel';
import { MAIN_PICTURE } from '../../data/data';

export default function MainSlide() {
  const cardRef = useRef();

  // const handleRenderItem = ({ item, index }) => {
  //   return (
  //     <View style={styles.cardContainer}>
  //       <View style={styles.cardView}>
  //         <AntDesign name="left" size={25} style={{ color: '#fff', marginLeft: 10 }} />
  //         <View style={styles.rightView}>
  //           <AntDesign name="hearto" size={25} style={{ color: '#fff', marginRight: 15 }} />
  //           <Feather name="share" size={25} style={{ color: '#fff', marginRight: 15 }} />
  //         </View>
  //       </View>
  //       <Image source={item.src} resizeMode="stretch" style={styles.slideInnerContainer} />
  //     </View>
  //   );
  // };

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
  cardContainer: {
    // flex: 1,
  },

  slide: {
    width: itemWidth,
    height: itemHeight,
    // paddingHorizontal: horizontalMargin,
  },
  cardView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    top: 50,
    width: '100%',
    zIndex: 9,
  },

  slideInnerContainer: {
    // flex: 1,
    // width: sliderWidth,
    // width: '100%',
    overflow: 'hidden',
  },
  rightView: {
    flexDirection: 'row',
  },
});

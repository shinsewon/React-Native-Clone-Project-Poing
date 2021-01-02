import React, { useState, useRef } from 'react';
import { Text, View, StyleSheet, Dimensions, Image } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
// import AssetExample from './components/AssetExample';
import Carousel, { Pagination } from 'react-native-snap-carousel';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

// or any pure javascript modules available in npm
// import { Card } from 'react-native-paper';

export default function Test2() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeSlide2, setActiveSlide2] = useState(0);

  const entries = [
    {
      title: 'card1',
    },
    {
      title: 'card2',
    },
    {
      title: 'card3',
    },
    {
      title: 'card4',
    },
  ];
  const entries2 = [
    {
      title: 'card1',
    },
    {
      title: 'card2',
    },
    {
      title: 'card3',
    },
    {
      title: 'card4',
    },
  ];

  var slides = [];

  const entriesSplitter = () => {
    let size = 1; //Based on the size you want
    while (entries.length > 0) {
      slides.push(entries.splice(0, size));
    }
  };

  // render every single slide
  const _renderItem = ({ item, index }) => {
    return (
      <View style={{ backgroundColor: 'green', justifyContent: 'center', alignItems: 'center' }}>
        <Image
          style={{ height: screenHeight / 2, width: screenWidth - 100 }}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
      </View>
    );
  };

  const _renderItem2 = ({ item, index }) => {
    return (
      <View style={{ backgroundColor: 'yellow', justifyContent: 'center', alignItems: 'center' }}>
        <Image
          style={{ height: screenHeight / 2, width: screenWidth - 100 }}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        ref={(c) => {
          this._carousel = c;
        }}
        data={entries}
        renderItem={_renderItem}
        onSnapToItem={(index) => setActiveSlide(index)}
        sliderWidth={screenWidth - 20}
        sliderHeight={screenHeight - 100}
        itemWidth={screenWidth - 50}
      />
      {
        <Pagination
          dotsLength={4} // also based on number of sildes you want
          activeDotIndex={activeSlide}
          containerStyle={{ backgroundColor: 'red', borderWidth: 2 }}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 8,
            backgroundColor: 'black',
          }}
          inactiveDotStyle={{
            backgroundColor: 'pink',
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
      }
      <Carousel
        ref={(c) => {
          this._carousel2 = c;
        }}
        data={entries2}
        renderItem={_renderItem2}
        onSnapToItem={(index) => setActiveSlide2(index)}
        sliderWidth={screenWidth - 20}
        sliderHeight={screenHeight - 100}
        itemWidth={screenWidth - 50}
      />

      {
        <Pagination
          dotsLength={4} // also based on number of sildes you want
          activeDotIndex={activeSlide2}
          containerStyle={{ backgroundColor: 'red', borderWidth: 2 }}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 8,
            backgroundColor: 'black',
          }}
          inactiveDotStyle={{
            backgroundColor: 'pink',
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});

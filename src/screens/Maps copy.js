import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Dimensions, Animated, Image, SafeAreaView } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { StatusBar } from 'expo-status-bar';
import MapView, { Marker, AnimatedRegion } from 'react-native-maps';
import * as Location from 'expo-location';
import { FontAwesome5 } from 'react-native-vector-icons';
import { colors } from '../styles/color/Color';
import { SEARCH_DATA } from '../data/data';

const { width, height } = Dimensions.get('screen');

export default function Maps(props) {
  const [errorMsg, setErrorMsg] = useState(null);
  const [mapRegin, setMapRegin] = useState(null);

  const CARD_HEIGHT = 220;
  const CARD_WIDTH = width * 0.8;
  const SPACING_FOR_CARD_INSET = width * 0.1 - 10;

  const cardRef = useRef(null);
  const _scrollView = useRef(null);
  let mapIndex = 0;
  let mapAnimation = new Animated.Value(0);

  useEffect(() => {
    mapAnimation.addListener(({ value }) => {
      let index = Math.floor(value / CARD_WIDTH + 0.3);
      if (index >= SEARCH_DATA) {
        index = SEARCH_DATA.length - 1;
      }
      if (index <= 0) {
        index = 0;
      }
      clearTimeout(regionTimeout);

      const regionTimeout = setTimeout(() => {
        if (mapIndex !== index) {
          mapIndex = index;
          const { coordinate } = SEARCH_DATA[index];
          cardRef.current.AnimatedRegion(
            {
              ...coordinate,
              latitudeDelta: mapRegin.latitudeDelta,
              longitudeDelta: mapRegin.longitudeDelta,
            },
            350
          );
        }
      }, 10);
    });
  });

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setMapRegin({
        longitude: location.coords.longitude,
        latitude: location.coords.latitude,
        longitudeDelta: 0.0922,
        latitudeDelta: 0.0421,
      });
    })();
  }, []);

  const handleRenderItem = ({ item, index }) => {
    // console.log(item.src);
    return (
      <View style={styles.card} key={item.id}>
        <View style={styles.imgContainer}>
          <View style={{ height: 40, width: 40 }}>
            <Image source={item.src} style={styles.cardImage} />
          </View>
        </View>
        <View style={styles.textContent}>
          <Text numberOfLines={1} style={styles.cardTitle}>
            {item.name}
          </Text>
          <Text numberOfLines={1} style={styles.cardDescription}>
            {item.description}
          </Text>
          <Text numberOfLines={1} style={styles.cardDescription}>
            {item.area} {item.place} ∙ {item.food}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.wrap}>
      <StatusBar style="dark" />
      <MapView initialRegion={mapRegin} style={styles.mapView}>
        <Marker coordinate={mapRegin} title="나" description="본인">
          <View style={styles.circle}>
            <View style={styles.stroke} />
            <View style={styles.core} />
          </View>
        </Marker>
        {SEARCH_DATA
          ? SEARCH_DATA.map((item) => (
              <Marker
                key={item.id}
                coordinate={item.location}
                title={item.name}
                description={item.description}
              >
                <FontAwesome5 name={item.icon} size={26} color={colors.defaultRed} />
              </Marker>
            ))
          : null}
      </MapView>
      {/* <Animated.ScrollView horizontal scrollEventThrottle={1} showsHorizontalScrollIndicator={false} style={styles.scrollView}>
        {SEARCH_DATA.map((item) => (
          <View style={styles.card} key={item.id}>
            <Image source={{ url: item.img }} style={styles.cardImage} resizeMode="cover" />
            <View style={styles.textContent}>
              <Text numberOfLines={1} style={styles.cardTitle}>
                {item.name}
              </Text>
              <Text numberOfLines={1} style={styles.cardDescription}>
                {item.description}
              </Text>
            </View>
          </View>
        ))}
      </Animated.ScrollView> */}
      <Animated.ScrollView
        scrollEventThrottle={1}
        style={styles.cardSlider}
        showsHorizontalScrollIndicator={false}
        snapToInterval={CARD_WIDTH + 20}
        snapToAlignment="center"
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  x: mapAnimation,
                },
              },
            },
          ],
          { useNativeDriver: true }
        )}
      >
        <Carousel
          data={SEARCH_DATA}
          layout={'default'}
          ref={cardRef}
          sliderWidth={350}
          itemWidth={300}
          renderItem={handleRenderItem}

          // slideStyle={{ marginLeft: -2 }}
        />
      </Animated.ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: '#fff',
    width: 350,
    height: 500,
  },
  mapView: {
    width: 350,
    height: 500,
  },
  circle: {
    width: 26,
    height: 26,
    borderRadius: 50,
    backgroundColor: '#fff',
    zIndex: 1,
    shadowColor: '#555',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.9,
  },
  stroke: {
    width: 26,
    height: 26,
    borderRadius: 50,
    backgroundColor: '#fff',
    zIndex: 1,
  },
  core: {
    width: 24,
    height: 24,
    position: 'absolute',
    top: 1,
    left: 1,
    right: 1,
    bottom: 1,
    backgroundColor: colors.defaultRed,
    zIndex: 3,
    borderRadius: 50,
  },
  card: {
    flexDirection: 'row',
    height: 70,
    // borderWidth: 2,
    // borderColor: 'red',
    backgroundColor: 'white',
    borderRadius: 6,
  },
  imgContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    marginLeft: 10,
    // backgroundColor: 'blue',
  },
  cardImage: {
    borderRadius: 50,
    width: 40,
    height: 40,
  },
  cardSlider: {
    position: 'absolute',
    bottom: 10,
    // top: 0,
    zIndex: 9,
  },
  textContent: {
    // width:'100%',
    marginLeft: 5,
    justifyContent: 'center',
    // backgroundColor: 'yellow',
  },
  cardTitle: {
    fontSize: 13,
    fontWeight: '500',
  },
  cardDescription: {
    fontSize: 11,
    color: colors.defaultgray,
    marginTop: 2,
  },
});

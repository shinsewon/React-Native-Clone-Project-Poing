import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Dimensions, Animated, Image, SafeAreaView } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { StatusBar } from 'expo-status-bar';
import MapView, { Marker, AnimatedRegion, PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location';
import { FontAwesome5 } from 'react-native-vector-icons';
import { colors } from '../styles/color/Color';
import { SEARCH_DATA } from '../data/data';

const { width, height } = Dimensions.get('window');
const CARD_HEIGHT = 220;
const CARD_WIDTH = width * 0.8;
const SPACING_FOR_CARD_INSET = width * 0.1 - 10;

export default function Maps(props) {
  const [errorMsg, setErrorMsg] = useState(null);
  const [mapRegin, setMapRegin] = useState(null);

  const cardRef = useRef(null);
  const _scrollView = useRef(null);

  let mapIndex = 0;
  let mapAnimation = new Animated.Value(0);

  useEffect(() => {
    mapAnimation.addListener(({ value }) => {
      let index = Math.floor(value / CARD_WIDTH + 0.3);

      if (index >= SEARCH_DATA.length) {
        index = SEARCH_DATA.length - 1;
      }
      if (index <= 0) {
        index = 0;
      }
      clearTimeout(regionTimeout);
      const regionTimeout = setTimeout(() => {
        if (mapIndex !== index) {
          mapIndex = index;
          const { location } = SEARCH_DATA[index];
          cardRef.current.animateToRegion(
            {
              ...location,
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

  const interpolations = SEARCH_DATA.map((item, index) => {
    const inputRange = [(index - 1) * CARD_WIDTH, index * CARD_WIDTH, (index + 1) * CARD_WIDTH];

    const scale = mapAnimation.interpolate({
      inputRange,
      outputRange: [1, 1.5, 1],
      extrapolate: 'clamp',
    });

    return { scale };
  });

  return (
    <View style={styles.wrap}>
      <StatusBar style="dark" />
      <MapView
        initialRegion={mapRegin}
        style={styles.mapView}
        ref={cardRef}
        provider={PROVIDER_GOOGLE}
      >
        <Marker coordinate={mapRegin} title="나" description="본인">
          <View style={styles.circle}>
            <View style={styles.stroke} />
            <View style={styles.core} />
          </View>
        </Marker>
        {SEARCH_DATA
          ? SEARCH_DATA.map((item, index) => {
              const scaleStyle = {
                transform: [
                  {
                    scale: interpolations[index].scale,
                  },
                ],
              };
              return (
                <MapView.Marker
                  key={item.id}
                  coordinate={item.location}
                  title={item.name}
                  description={item.description}
                >
                  <Animated.View style={[styles.markerWrap]}>
                    <Animated.Image
                      source={require('../assert/image/map_marker.png')}
                      style={[styles.marker, scaleStyle]}
                      resizeMode="cover"
                    />
                  </Animated.View>
                </MapView.Marker>
              );
            })
          : null}
      </MapView>
      <Animated.ScrollView
        horizontal
        pagingEnabled
        conterContent={true}
        scrollEventThrottle={0}
        style={styles.cardSlider}
        showsHorizontalScrollIndicator={false}
        snapToInterval={CARD_WIDTH + 20}
        snapToAlignment="center"
        disableIntervalMomentum={true}
        contentInset={{
          top: 0,
          left: SPACING_FOR_CARD_INSET,
          bottom: 0,
          right: SPACING_FOR_CARD_INSET,
        }}
        contentContainerStyle={{
          paddingHorizontal: Platform.OS === 'android' ? SPACING_FOR_CARD_INSET : 0,
        }}
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
        {SEARCH_DATA.map((item, index) => (
          <View style={styles.card2} key={item.id}>
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
        ))}
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
    marginRight: 10,
  },
  card2: {
    width: CARD_WIDTH,
    flexDirection: 'row',
    height: 70,
    backgroundColor: 'white',
    borderRadius: 6,
    // marginRight: 10,
    // marginLeft: 10,
    // elevation: 2,
    // backgroundColor: '#FFF',
    // borderTopLeftRadius: 5,
    // borderTopRightRadius: 5,
    marginHorizontal: 10,
    // shadowColor: '#000',
    // shadowRadius: 5,
    // shadowOpacity: 0.3,
    // shadowOffset: { x: 2, y: -2 },
    // // height: CARD_HEIGHT,
    // width: CARD_WIDTH,
    // overflow: 'hidden',
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
  markerWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
  },
  marker: {
    width: 30,
    height: 30,
  },
});

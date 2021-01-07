import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { FontAwesome5 } from 'react-native-vector-icons';
import { colors } from '../styles/color/Color';
import { SEARCH_DATA } from '../data/data';

const { width, height } = Dimensions.get('screen');

export default function Maps(props) {
  const [errorMsg, setErrorMsg] = useState(null);
  const [mapRegin, setMapRegin] = useState(null);

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
              <Marker key={item.id} coordinate={item.location} title={item.name} description={item.description}>
                <FontAwesome5 name={item.icon} size={26} color={colors.defaultRed} />
              </Marker>
            ))
          : null}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: '#fff',
    width,
    height,
  },
  mapView: {
    width,
    height,
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
    zIndex: 2,
    borderRadius: 50,
  },
});

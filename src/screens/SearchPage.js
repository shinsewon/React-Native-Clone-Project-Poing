import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import DetailRestaurant from './DetailRestaurant';
import MainSlide from '../components/DetialRestaurant/MainSlide';
import { AntDesign, Feather } from 'react-native-vector-icons';
import { MOCKDATA } from '../data/data';

export default function SearchPage({ navigation, route }) {
  const [fetchData, setFatchData] = useState([]);

  const paramsImg = route.params.data[0].img;

  const goToNavigation = navigation;

  const restaurantData = async () => {
    let response = await fetch(MOCKDATA);
    response = await response.json();
    setFatchData(response);
  };

  useEffect(() => {
    restaurantData();
  }, []);

  const goBack = () => {
    goToNavigation.goBack();
  };

  return (
    <View style={styles.wrap}>
      <ScrollView>
        <View style={styles.cardView}>
          <TouchableOpacity onPress={goBack}>
            <AntDesign name="left" size={25} style={{ color: '#fff', marginLeft: 10 }} />
          </TouchableOpacity>
          <View style={styles.rightView}>
            <AntDesign name="hearto" size={25} style={{ color: '#fff', marginRight: 15 }} />
            <Feather name="share" size={25} style={{ color: '#fff', marginRight: 15 }} />
          </View>
        </View>
        <MainSlide paramsImg={paramsImg} />
        <View style={styles.container}>
          <DetailRestaurant paramData={route.params.data} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  cardView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    top: 50,
    width: '100%',
    zIndex: 9,
  },
  rightView: {
    flexDirection: 'row',
  },
  container: {
    flex: 1,
    marginHorizontal: 30,
  },
});

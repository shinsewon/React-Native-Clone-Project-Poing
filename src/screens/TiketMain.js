import React from 'react';
import styled from 'styled-components';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import { TIKET_LIST } from '../data/data';
import { colors } from '../styles/color/Color';
import { AntDesign } from 'react-native-vector-icons';
import Modal from '../components/Modal/Modal';

export default function TiketMain() {
  const ChoiceTiket = () => (
    <SafeAreaView style={styles.ChoiceTiketContainer}>
      <View style={styles.TiketBox}>
        <Text style={styles.tiket}>다이닝 티켓</Text>
      </View>
      <View style={styles.TiketBox}>
        <Text style={styles.tiket}>다이닝 가이드</Text>
      </View>
    </SafeAreaView>
  );

  const TiketList = () => {
    const renderItem = (item) => (
      <View style={styles.rederItemContainer}>
        <View style={styles.imgContainer}>
          <View style={styles.saleContainer}>
            <View style={styles.saleBox}>
              <Text style={styles.sale}>{item.sale}</Text>
            </View>
            <TouchableOpacity style={styles.heartBox}>
              <AntDesign name="hearto" size={20} style={styles.heartBtn} />
            </TouchableOpacity>
          </View>
          <View style={styles.imgBox}>
            <Image source={item.src} resizeMode="cover" style={styles.img} />
          </View>
          <View style={styles.bottomSaleContainer}>
            <View style={styles.bottomSaleBox}>
              <View>
                <Text style={{ fontSize: 14, color: '#fff', textDecorationLine: 'line-through' }}>
                  {item.price.toLocaleString()}원
                </Text>
              </View>
              <View style={{ marginTop: 5 }}>
                <Text style={{ fontSize: 23, fontWeight: '500', color: '#fff' }}>
                  {item.salePrice.toLocaleString()}원
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.titleContainer}>
          <View>
            <Text style={{ fontSize: 16, lineHeight: 20, fontWeight: '500' }}>{item.title}</Text>
          </View>
          <View>
            <Text style={{ fontSize: 12, lineHeight: 18, color: colors.defaultgray }}>
              {item.discription}
            </Text>
          </View>
          <View>
            <Text style={{ fontSize: 12, lineHeight: 18, color: colors.defaultgray }}>
              {item.area} {item.place}∙{item.food}
            </Text>
          </View>
        </View>
      </View>
    );

    return (
      <FlatList
        data={TIKET_LIST}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => renderItem(item)}
      />
    );
  };

  const ModalMap = () => {
    return <Modal />;
  };

  return (
    <SafeAreaView style={styles.wrap}>
      <View>
        <View style={styles.header}>
          <Text style={styles.headerText}>티켓</Text>
        </View>
        <ChoiceTiket />
        <TiketList />
      </View>
      <View style={styles.modalContainer}>
        <ModalMap />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
  },
  rederItemContainer: {
    marginBottom: 20,
  },

  headerText: {
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 23,
  },
  ChoiceTiketContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
  },

  tiketContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    height: 48,
    backgroundColor: 'green',
    borderBottomWidth: 1,
    borderColor: 'black',
  },
  tiket: {
    fontSize: 15,
    fontWeight: '500',
    color: colors.defaultRed,
  },

  saleContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    position: 'absolute',
    zIndex: 9,
    width: '100%',
    height: 22,
    top: 10,
  },
  saleBox: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    marginLeft: 15,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.defaultRed,
    backgroundColor: colors.defaultRed,
  },
  sale: {
    fontSize: 13,
    fontWeight: '700',
    color: '#fff',
  },
  heartBox: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  heartBtn: {
    color: '#fff',
  },
  imgBox: {
    width: '100%',
    backgroundColor: 'black',
    height: 300,
  },
  img: {
    width: 'auto',
    height: 300,
  },
  bottomSaleContainer: {
    position: 'absolute',
    bottom: 20,
    right: 15,
    zIndex: 9,
    height: 40,
    justifyContent: 'center',
  },
  bottomSaleBox: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  titleContainer: {
    height: 50,
    marginHorizontal: 20,
    marginVertical: 10,
  },

  modalContainer: {
    position: 'absolute',
    bottom: 10,
  },

  TiketBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    height: 48,
    borderBottomWidth: 2,
    borderBottomColor: 'red',
  },
});

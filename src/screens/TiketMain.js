import React from 'react';
import styled from 'styled-components';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, FlatList, TouchableOpacity, Image } from 'react-native';
import { TIKET_LIST } from '../data/data';
import { colors } from '../styles/color/Color';
import { AntDesign } from 'react-native-vector-icons';
import Modal from '../components/Modal/Modal';

export default function TiketMain() {
  const ChoiceTiket = () => (
    <View style={styles.ChoiceTiketContainer}>
      <TiketBox>
        <Text style={styles.tiket}>다이닝 티켓</Text>
      </TiketBox>
      <TiketBox>
        <Text style={styles.tiket}>다이닝 가이드</Text>
      </TiketBox>
    </View>
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
                <Text style={{ fontSize: 14, color: '#fff', textDecorationLine: 'line-through' }}>{item.price.toLocaleString()}원</Text>
              </View>
              <View style={{ marginTop: 5 }}>
                <Text style={{ fontSize: 23, fontWeight: '500', color: '#fff' }}>{item.salePrice.toLocaleString()}원</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.titleContainer}>
          <View style={styles.restaurantName}>
            <Text style={{ fontSize: 16, lineHeight: 20, fontWeight: '500' }}>{item.title}</Text>
          </View>
          <View>
            <Text style={{ fontSize: 12, lineHeight: 18, color: colors.defaultgray }}>{item.discription}</Text>
          </View>
          <View>
            <Text style={{ fontSize: 12, lineHeight: 18, color: colors.defaultgray }}>
              {item.area} {item.place}∙{item.food}
            </Text>
          </View>
        </View>
      </View>
    );

    return <FlatList data={TIKET_LIST} keyExtractor={(item) => item.id.toString()} renderItem={({ item }) => renderItem(item)} />;
  };

  const ModalMap = () => {
    return <Modal />;
  };

  return (
    <SafeAreaView style={styles.wrap}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.headerText}>티켓</Text>
        </View>
        <ChoiceTiket />
        <TiketList />
      </ScrollView>
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
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 40,
    // backgroundColor: 'yellow',
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
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    // alignItems: 'center',
    flexDirection: 'row',
    // backgroundColor: 'blue',
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
    // backgroundColor: 'yellow',
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
    // backgroundColor: 'blue',
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
    // backgroundColor: 'yellow',
    justifyContent: 'center',
  },
  bottomSaleBox: {
    // flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    // marginRight: 15,
    // lineHeight: 30,
  },
  titleContainer: {
    height: 50,
    marginHorizontal: 20,
    marginVertical: 10,
    // backgroundColor: 'yellow',
  },
  restaurantName: {
    // height: 16,
    // backgroundColor: 'green',
  },
  modalContainer: {
    position: 'absolute',
    bottom: 10,
  },
});

const TiketBox = styled(View)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 48px;
  border-bottom-width: 2px;
  border-bottom-color: #eb0019;
`;

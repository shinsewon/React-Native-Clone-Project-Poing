import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import DetailRestaurant from '../screens/DetailRestaurant';
import MainSlide from '../components/DetialRestaurant/MainSlide';
import { AntDesign, Feather } from 'react-native-vector-icons';
import { colors } from '../styles/color/Color';
import { POPULAR_SEARCHES } from '../data/data';

const TextInputBox = ({ click, setClick }) => {
  return (
    <View style={styles.textInputContainer}>
      {click ? <AntDesign name="left" size={25} style={styles.left} /> : null}
      <TextInput style={styles.textinput} autoCapitalize="none" placeholder="매장, 음식, 지역을 검색해보세요." onTouchStart={() => setClick(true)} />
      <View style={styles.right}>{click ? <Text>취소</Text> : null}</View>
    </View>
  );
};

const GoToModal = () => {
  return (
    <View style={styles.modalContainer}>
      <View style={styles.modal}>
        <Text style={{ color: colors.red }}>2명 / 1월 04일(월)</Text>
      </View>
    </View>
  );
};

const RecentSearches = () => {
  return (
    <View style={styles.searchContainer}>
      <View>
        <Text style={{ color: colors.defaultgray, fontSize: 12 }}>최근 검색어</Text>
      </View>
      <View style={styles.searchBox}>
        <View style={styles.searchComment}>
          <Text style={{ fontSize: 13, fontWeight: '300' }}>호텔</Text>
        </View>
        <View style={styles.close}>
          <AntDesign name="close" size={12} style={styles.closeBtn} />
        </View>
      </View>
    </View>
  );
};

const PopularSearches = () => {
  return (
    <View style={styles.searchContainer}>
      <View>
        <Text style={{ color: colors.defaultgray, fontSize: 12 }}>인기 검색어</Text>
      </View>
      {[...POPULAR_SEARCHES].map((item) => {
        return (
          <View style={styles.searchBox} key={item.id}>
            <View style={styles.searchComment}>
              <Text style={{ fontSize: 13, fontWeight: '300' }}>{item.title}</Text>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default function Search() {
  const [click, setClick] = useState(false);
  return (
    <View style={styles.wrap}>
      {/* <ScrollView>
        <View style={styles.cardView}>
          <AntDesign name="left" size={25} style={{ color: '#fff', marginLeft: 10 }} />
          <View style={styles.rightView}>
            <AntDesign name="hearto" size={25} style={{ color: '#fff', marginRight: 15 }} />
            <Feather name="share" size={25} style={{ color: '#fff', marginRight: 15 }} />
          </View>
        </View>
        <MainSlide />
        <View style={styles.container}>
          <DetailRestaurant />
        </View>
      </ScrollView> */}
      <SafeAreaView style={styles.viewContainer}>
        <TextInputBox click={click} setClick={setClick} />
        <View style={styles.container}>
          <GoToModal />
          <RecentSearches />
          <PopularSearches />
        </View>
      </SafeAreaView>
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
  container: {
    flex: 1,
    marginHorizontal: 30,
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
  viewContainer: {
    flex: 1,
    width: '100%',
  },
  textinput: {
    width: '90%',
    height: 55,
    fontSize: 17,
    paddingLeft: 30,
  },

  textInputContainer: {
    position: 'relative',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    borderBottomWidth: 3,
    borderBottomColor: colors.red,
  },
  left: {
    left: 20,
    color: colors.red,
  },
  right: {
    position: 'absolute',
    right: 20,
    zIndex: 9,
  },
  modalContainer: {
    justifyContent: 'center',
    height: 50,
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    width: 130,
    borderWidth: 1,
    borderColor: colors.red,
    borderRadius: 15,
  },

  searchContainer: {
    marginTop: 20,
  },
  searchBox: {
    flexDirection: 'row',
    marginTop: 10,
  },
  searchComment: {
    justifyContent: 'center',
    width: '95%',
  },
  close: {
    width: '5%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeBtn: {
    color: colors.defaultgray,
  },
});

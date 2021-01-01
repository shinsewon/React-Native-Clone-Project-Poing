import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, SafeAreaView, Pressable, Alert } from 'react-native';
import { AntDesign, MaterialIcons } from 'react-native-vector-icons';
import CardSlider from './CardSlider';
import AwardsCard from './AwardsCard';
import TotalFoodCard from './TotalFoodCard';
import ItemCard from './ItemCard';
import RectangleSilder from './RectangleSlider';

const LogoTitle = () => {
  return (
    <View style={styles.logoTitleWrap}>
      <View style={styles.logoContainer}>
        <Image style={{ width: 80, height: 45 }} source={require('../../assert/image/ohoing.png')} />
        <TextInput style={styles.textInput} editable={false} value={'서울 전체'} />
        <MaterialIcons name="gps-fixed" size={25} />
      </View>
      <View style={styles.calander}>
        <AntDesign name="calendar" size={25} />
      </View>
    </View>
  );
};

const SectionBar = ({ title, show }) => {
  return (
    <>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.divider} />
      </View>
      <View style={styles.poingAwards}>
        <Text style={{ fontSize: 20, fontWeight: '500' }}>{title}</Text>
        {show ? (
          <View>
            <AntDesign name="right" style={{ color: '#a5b1c2' }} size={25} />
          </View>
        ) : null}
      </View>
    </>
  );
};

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.wrap}>
      <LogoTitle />
      <ScrollView>
        <CardSlider />
        <View style={styles.container}>
          <SectionBar title="오잉 어워즈 2020" show={true} />
          <AwardsCard />
          <SectionBar title="서울 전체 음식 종류별" />
          <TotalFoodCard />
          <SectionBar title="서울 전체 추천 레스토랑" show={true} />
          <ItemCard />
          <SectionBar title="스시 매니아들을 위한" show={true} />
          <RectangleSilder />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logoTitleWrap: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 0,
    width: 350,
  },
  logoContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginHorizontal: 10,
  },
  calander: {
    marginRight: 10,
    padding: 5,
    backgroundColor: 'red',
    borderRadius: 50,
  },
  divider: {
    backgroundColor: '#d1d8e0',
    marginTop: 30,
    height: 1,
    flex: 1,
    alignSelf: 'center',
  },
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  poingAwards: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 30,
  },
});

import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, SafeAreaView, Pressable, Alert } from 'react-native';
import { AntDesign, MaterialIcons } from 'react-native-vector-icons';

import AsyncStorage from '@react-native-async-storage/async-storage';

const LogoTitle = () => {
  return (
    <View style={styles.logoTitleWrap}>
      <View style={styles.logoContainer}>
        <Image style={{ width: 80, height: 45 }} source={require('../assert/image/ohoing.png')} />
        <TextInput style={styles.textInput} editable={false} value={'서울 전체'} />
        <MaterialIcons name="gps-fixed" size={25} />
      </View>
      <View style={styles.calander}>
        <AntDesign name="calendar" size={25} />
      </View>
    </View>
  );
};

// const getData = async () => {
//   try {
//     const value = await AsyncStorage.getItem('username');
//     if (value !== null) {
//       Alert.alert(value);
//     }
//   } catch (e) {
//     Alert.alert(`${e}`);
//   }
// };

const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('username');
    if (jsonValue != null) {
      const parsedJson = JSON.parse(jsonValue);
      // return  JSON.parse(jsonValue) ;
      Alert.alert(parsedJson.name);
    }
  } catch (e) {
    // error reading value
  }
};

const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('username', jsonValue);
  } catch (e) {
    // saving error
  }
};
// const storeData = async (value) => {
//   try {
//     await AsyncStorage.setItem('username', value);
//   } catch (e) {
//     Alert.alert(`${e}`);
//   }
// };

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.wrap}>
      <LogoTitle />
      <ScrollView style={{ backgroundColor: 'yellow' }}>
        <Text>홈 스크린 입니다.</Text>
        <Pressable onPress={() => storeData({ name: '신세원' })}>
          <Text>디바이스에 정보 저장</Text>
        </Pressable>
        <Pressable onPress={getData}>
          <Text>디바이스에 정보 확인!</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'yellow',
  },
  logoTitleWrap: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 0,
    width: 400,
    backgroundColor: 'blue',
  },
  logoContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'green',
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
});

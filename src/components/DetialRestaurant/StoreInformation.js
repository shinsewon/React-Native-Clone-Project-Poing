import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { AntDesign, FontAwesome } from 'react-native-vector-icons';

export default function StoreInformation() {
  return (
    <View style={styles.wrap}>
      <View style={styles.storeContainer}>
        <View style={styles.leftInfo}>
          <Text style={{ fontSize: 12 }}>주소</Text>
        </View>
        <View style={{ width: 'auto' }}>
          <View style={styles.anchorBox}>
            <Text style={{ fontWeight: '300' }}>서울 강남구 강남대로 94길 70</Text>
          </View>
          <View style={{ flexDirection: 'row', marginTop: 5 }}>
            <View style={styles.textContainer}>
              <AntDesign name="copy1" size={12} style={{ color: '#D2CBBE' }} />
              <Text style={{ fontSize: 12, color: '#D2CBBE' }}>복사</Text>
            </View>
            <View style={styles.textContainer}>
              <FontAwesome name="map-marker" size={12} style={{ color: '#D2CBBE' }} />
              <Text style={{ fontSize: 12, color: '#D2CBBE' }}>길찾기</Text>
            </View>
            <View style={styles.textContainer}>
              <FontAwesome name="taxi" size={12} style={{ color: '#D2CBBE' }} />
              <Text style={{ fontSize: 12, color: '#D2CBBE' }}>택시</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.textContainer, { marginTop: 20 }]}>
        <View style={styles.leftInfo}>
          <Text style={{ fontSize: 12 }}>전화</Text>
        </View>
        <View style={styles.anchorBox}>
          <Text style={{ fontWeight: '300' }}>010-9775-1541</Text>
        </View>
      </View>
      <View style={[styles.textContainer, { marginTop: 10 }]}>
        <View style={styles.leftInfo}>
          <Text style={{ fontSize: 12 }}>영업시간</Text>
        </View>
        <View>
          <Text style={{ fontWeight: '300' }}>11:30~15:00(L.O 14:00), 17:30~22:00(L.O 21:00)</Text>
        </View>
      </View>
      <View style={[styles.textContainer, { marginTop: 10 }]}>
        <View style={styles.leftInfo}>
          <Text style={{ fontSize: 12 }}>휴무일</Text>
        </View>
        <View>
          <Text style={{ fontWeight: '300' }}>명절,일요일,월요일</Text>
        </View>
      </View>
      <View style={[styles.textContainer, { marginTop: 10 }]}>
        <View style={styles.leftInfo}>
          <Text style={{ fontSize: 12 }}>주차</Text>
        </View>
        <View>
          <Text style={{ fontWeight: '300' }}>가능</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    justifyContent: 'flex-start',
    marginTop: 10,
  },
  storeContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  textContainer: {
    flexDirection: 'row',
    marginRight: 20,
  },
  leftInfo: {
    justifyContent: 'center',
    width: 50,
    height: 20,
  },
  anchorBox: {
    borderBottomWidth: 1,
    borderColor: 'black',
    marginBottom: 2,
  },
});

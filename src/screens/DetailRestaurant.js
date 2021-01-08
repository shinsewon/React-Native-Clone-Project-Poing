import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import { Rating } from 'react-native-ratings';
import { EvilIcons } from 'react-native-vector-icons';
import Section from '../components/Section';
import StoreInfomation from '../components/DetialRestaurant/StoreInformation';

const TitleText = ({ paramData, routeIdx }) => {
  return (
    <View style={styles.titleText}>
      <Text style={{ fontSize: 22, fontWeight: '500', lineHeight: 33 }}>{paramData[0].name}</Text>
      <Text style={styles.description}>역삼동에 위치한 편안하게 즐기기 좋은 아메리칸 비스트로</Text>
      <Text style={styles.description}>서울 강남역 ∙ ₩ (1~5만원, 2인 기준)</Text>
    </View>
  );
};

const GradeBox = () => {
  return (
    <View style={styles.gradebox}>
      <View style={styles.grade}>
        <Rating
          startingValue={2}
          ratingCount={1}
          imageSize={13}
          showRating={false}
          readonly={true}
          tintColor={'#F4F2EE'}
        />
        <Text style={{ fontSize: 14, fontWeight: '500', marginLeft: 3 }}>3.8</Text>
      </View>
      <View style={[styles.grade, styles.text]}>
        <Text style={styles.text}>음식</Text>
        <Text style={styles.scoretext}>3.8</Text>
      </View>
      <View style={styles.grade}>
        <Text style={styles.text}>서비스</Text>
        <Text style={styles.scoretext}>3.8</Text>
      </View>
      <View style={styles.grade}>
        <Text style={styles.text}>공간</Text>
        <Text style={styles.scoretext}>3.8</Text>
      </View>
      <View style={[styles.grade, { borderLeftWidth: 1, borderLeftColor: '#D2CBBE' }]}>
        <EvilIcons name="question" size={25} style={{ color: '#D2CBBE', marginLeft: 5 }} />
      </View>
    </View>
  );
};

export default function DetailRestaurant({ paramData, routeIdx }) {
  const SectionProps = {
    title: '매장 정보',
    subTitle: '정보 수정 요청',
    show: 'true',
    size: '15',
    barColor: '#EB1719',
    subTitleColor: '#c4bbab',
  };

  return (
    <SafeAreaView style={styles.wrap}>
      <TitleText paramData={paramData} routeIdx={routeIdx} />
      <GradeBox />
      <Section {...SectionProps} />
      <StoreInfomation />
      <Section {...SectionProps} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrap: {
    // flex: 1,
  },
  titleText: {
    marginTop: 20,
  },
  description: {
    fontSize: 12,
    lineHeight: 18,
    color: '#c4bbab',
  },
  gradebox: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 20,
    height: 42,
    borderRadius: 6,
    backgroundColor: '#F4F2EE',
  },
  grade: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 'auto',
  },
  text: {
    fontSize: 12,
  },
  scoretext: {
    fontSize: 12,
    marginLeft: 3,
  },
});

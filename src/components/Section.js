import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AntDesign } from 'react-native-vector-icons';

export default function Section({ title, show, subTitle, size, barColor, subTitleColor }) {
  return (
    <View>
      <View style={{ flexDirection: 'row' }}>
        <View style={[styles.divider, { borderColor: barColor }]} />
      </View>
      <View style={styles.poingAwards}>
        <Text style={{ fontSize: 17, fontWeight: '500' }}>{title}</Text>
        {show ? (
          <View style={styles.rightBox}>
            <Text style={{ fontSize: 12, color: subTitleColor }}>{subTitle}</Text>
            <AntDesign name="right" style={{ color: subTitleColor }} size={size} />
          </View>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  divider: {
    flex: 1,
    alignSelf: 'center',
    marginTop: 30,
    height: 1,
    borderTopWidth: 2,
  },
  poingAwards: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  rightBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

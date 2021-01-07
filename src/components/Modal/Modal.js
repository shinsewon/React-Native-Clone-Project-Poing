import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, TouchableHighlight, View, TouchableOpacity } from 'react-native';
import { AntDesign, FontAwesome } from 'react-native-vector-icons';
import { colors } from '../../styles/color/Color';
import Maps from '../../screens/Maps';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.modalTitle}>
              <TouchableHighlight
                style={{ backgroundColor: 'yellow', width: 50, zIndex: 3 }}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                <AntDesign name="close" size={20} style={styles.closeButton} />
              </TouchableHighlight>

              <Text style={styles.textStyle}>지도</Text>
            </View>
            <Maps />
          </View>
        </View>
      </Modal>

      {modalVisible ? null : (
        <TouchableHighlight
          style={styles.openButton}
          onPress={() => {
            setModalVisible(true);
          }}
        >
          <View style={styles.modalContainer}>
            <FontAwesome name="map-o" size={15} style={styles.mapImg} />
            <Text style={styles.bottomText}>지도</Text>
          </View>
        </TouchableHighlight>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    width: 70,
    backgroundColor: colors.defaultRed,
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  closeButton: {
    position: 'absolute',
    color: colors.defaultgray,
    // left: 10,
  },
  textStyle: {
    // color: 'white',
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
    // marginLeft: 7,
  },
  mapImg: {
    color: '#fff',
  },
  modalContainer: {
    flexDirection: 'row',
  },
  modalTitle: {
    justifyContent: 'center',
    width: 350,
    height: 30,
    // backgroundColor: 'yellow',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  bottomText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#fff',
    marginLeft: 7,
  },
});

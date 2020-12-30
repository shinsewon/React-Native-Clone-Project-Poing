import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Camera } from 'expo-camera';

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [imgUrl, setImgUrl] = useState('');
  const cameraRef = useRef();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const takePicture = async () => {
    const result = await cameraRef.current.takePictureAsync();
    console.log('result>>', result);
    setImgUrl(result.uri);
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type} ref={cameraRef}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setType(type === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back);
            }}
          >
            <Text style={styles.text}> 카메라 전환 </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={takePicture}>
            <Text style={styles.text}> 사진찍기 </Text>
          </TouchableOpacity>
        </View>
      </Camera>
      {imgUrl ? <Image style={{ flex: 0.5, width: '100%' }} source={{ uri: imgUrl }} /> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 0.5,
  },
  buttonContainer: {
    // backgroundColor: 'blue',
    // alignSelf: 'flex-end',
  },
  button: {
    marginTop: 100,
    backgroundColor: 'blue',
  },
  text: {},
});

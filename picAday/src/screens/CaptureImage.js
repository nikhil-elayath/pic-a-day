import React, {useEffect, useRef} from 'react';
import {View, Text, Platform, TouchableOpacity, Alert} from 'react-native';
import {RNCamera as Camera} from 'react-native-camera';
import ImageCard from '../components/ImageCard';
import BottomTabBar from '../reuseableComponents/BottomTabBar';

export default function CaptureImage(props) {
  // const [imgUrl, setImgUrl] = useState(null);

  const cameraRef = useRef();
  const takePicture = async () => {
    console.log('from take picture');

    let options = {
      quality: 0.85,
      fixOrientation: true,
      forceUpOrientation: true,
    };

    try {
      const data = await cameraRef.current.takePictureAsync();
      //  call to database
      props.navigation.navigate('DayEditView', {imageUri: data.uri});
    } catch (err) {
      Alert.alert('Error', 'Failed to take picture: ' + (err.message || err));
      return;
    } finally {
    }
  };

 

  return (
    <View style={{flex: 1}}>
      <View>
        <Camera
          ref={cameraRef}
          style={{height: '100%'}}
          captureAudio={false}
          type={Camera.Constants.Type.back}
          flashMode={Camera.Constants.FlashMode.on}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          onGoogleVisionBarcodesDetected={({barcodes}) => {
            console.log(barcodes);
          }}
          onPress={takePicture}>
        </Camera>
      </View>
      <BottomTabBar navigation={props.navigation}
      cameraOn={true}
      captureImage={takePicture}
    

       />
    </View>
  );
}

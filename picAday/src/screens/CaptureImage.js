import React, {useEffect, useRef} from 'react';
import {View, Text, Platform, TouchableOpacity, Alert} from 'react-native';
import {RNCamera as Camera} from 'react-native-camera';
import {createUserEntry, updateUserEntryById} from '../actions/UserEntry';
import Geolocation from 'react-native-geolocation-service';


import ImageCard from '../components/ImageCard';
import BottomTabBar from '../reuseableComponents/BottomTabBar';
import Geolocation from 'react-native-geolocation-service';
import {useDispatch, useSelector} from 'react-redux';

export default function CaptureImage(props) {
  const cameraRef = useRef();
  const dispatch = useDispatch();

  const getImageLocationAndTemperature = async imageUri => {
    console.log('start', imageUri);
    try {
      var imageLocation;
      console.log("within try")

      // getting the location
     await Geolocation.getCurrentPosition(async position => {
       console.log("within geolocation")
        const url = `https://reverse.geocoder.ls.hereapi.com/6.2/reversegeocode.json?apiKey=VQCnCJVY_c9-7ezRY5xlhmh_QtFkt8hC-dlYMyc-4Bw&mode=retrieveAddresses&prox=${position.coords.latitude},${position.coords.longitude}`;
        await fetch(url)
          .then(res => console.log(res))
          // .then(async resJson => {
          //   imageLocation =
          //     resJson.Response.View[0].Result[0].Location.Address.County +
          //     ',' +
          //     resJson.Response.View[0].Result[0].Location.Address
          //       .AdditionalData[0].value;
          //   console.log('image above', imageLocation);
          // })
          .catch(e => {
            console.log('Error in getAddressFromCoordinates', e);
          });
      });

      // getting temperature
      const openweather_api =
        'https://api.openweathermap.org/data/2.5/weather?q=Mumbai&appid=cad6b217b338049c1700977e5c93f721&units=metric';
      fetch(openweather_api)
        .then(res => res.json())
        .then(async resJson => {
          let data = {
            imageUri: imageUri,
            imageLocation: imageLocation,
            imageTemperature: resJson.main.temp,
          };
          console.log('printing data', data);
          await dispatch(createUserEntry(data));
        })
        .catch(e => {
          console.log('Error in ', e);
        });

      // navigating to day edit view
    } catch (err) {
      console.log(err);
    }
  };
  const takePicture = async () => {
    console.log('from take picture');

    let options = {
      quality: 0.85,
      fixOrientation: true,
      forceUpOrientation: true,
    };

    try {
      const data = await cameraRef.current.takePictureAsync();
      await getImageLocationAndTemperature(data.uri);
      //  call to database
      // props.navigation.navigate('DayEditView', {imageUri: data.uri});
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
          onPress={takePicture}></Camera>
      </View>
      <BottomTabBar
        navigation={props.navigation}
        cameraOn={true}
        captureImage={takePicture}
      />
    </View>
  );
}

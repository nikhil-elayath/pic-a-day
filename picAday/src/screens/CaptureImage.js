import React, {useEffect, useRef} from 'react';
import {View, Text, Platform, TouchableOpacity, Alert} from 'react-native';
import {RNCamera as Camera} from 'react-native-camera';
import {createUserEntry, updateUserEntryById} from '../actions/UserEntry';
import ImageCard from '../components/ImageCard';
import BottomTabBar from '../reuseableComponents/BottomTabBar';
import Geolocation from 'react-native-geolocation-service';
import {useDispatch, useSelector} from 'react-redux';

export default function CaptureImage(props) {
  const cameraRef = useRef();
  const dispatch = useDispatch();

  const getImageLocationAndTemperature = async imageUri => {
    try {
      var imageLocation;

      // getting the location
      await Geolocation.getCurrentPosition(async position => {
        const url = `https://reverse.geocoder.ls.hereapi.com/6.2/reversegeocode.json?apiKey=C2i31ZIVgkgcqcOwb8qV2Xh2FDDpc4DWUnL-0TWOnL4&mode=retrieveAddresses&prox=${position.coords.latitude},${position.coords.longitude}`;
        await fetch(url)
          .then(resJson => resJson.json())
          .then(async resJson => {
            imageLocation =
              resJson.Response.View[0].Result[0].Location.Address.County +
              ',' +
              resJson.Response.View[0].Result[0].Location.Address
                .AdditionalData[0].value;
          })
          .catch(e => {
            console.log('Error in getAddressFromCoordinates', e);
          });
      });

      // getting temperature
      const openweather_api =
        'https://api.openweathermap.org/data/2.5/weather?q=Mumbai&appid=cad6b217b338049c1700977e5c93f721&units=metric';
      await fetch(openweather_api)
        .then(res => res.json())
        .then(async resJson => {
          let data = {
            imageUri: imageUri,
            imageLocation: imageLocation,
            imageTemperature: resJson.main.temp,
            imageDescription:
              props.navigation.navigate.state &&
              props.navigation.navigate.state.params.imageData
                .image_description,
            userEntryDate:
              props.navigation.navigate.state &&
              props.navigation.navigate.state.params.imageData.entry_date,
            userEntryId:
              props.navigation.state &&
              props.navigation.state.params &&
              props.navigation.state.params.imageData.id,
          };

          // cehcking whether it is for updating the existing the image
          // if that is the case then this component is called from day edit view and user entry will be present in the params
          // so if that is present it means this is an update requeta nd update action will be called along with the userEntryId
          // iF that is not th case createEnry action is called to create a new user entry in the db
          props.navigation.state &&
          props.navigation.state.params &&
          props.navigation.state.params.imageData
            ? await dispatch(updateUserEntryById(data))
            : await dispatch(createUserEntry(data));
        })
        .catch(e => {
          console.log('Error in ', e);
        });
    } catch (err) {
      console.log(err);
    }
  };
  const takePicture = async () => {
    let options = {
      quality: 0.85,
      fixOrientation: true,
      forceUpOrientation: true,
    };

    try {
      const data = await cameraRef.current.takePictureAsync();
      await getImageLocationAndTemperature(data.uri);
      await props.navigation.navigate('DayEditView');

      //  call to database
    } catch (err) {
      Alert.alert('Error', 'Failed to take picture: ' + (err.message || err));
      return;
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

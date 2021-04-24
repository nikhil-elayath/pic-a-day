import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import BottomTabBarStyles from '../assests/styles/reuseableComponents/BottomTabBar';
import {bottomTabBar} from '../assests/Icons';

export default function BottomTabBar(props) {
  console.log('propdddds', props.navigation.navigate);

  const navigateToScreen = screenName => {
    props.navigation.navigate(screenName);
  };
  return props.cameraOn == true ? (
    <View style={BottomTabBarStyles.mainContainerForCameraOnScreen}>
      <View style={BottomTabBarStyles.bottomMenuForCameraOnScreen}>
        <TouchableOpacity
          onPress={props.captureImage}
          style={BottomTabBarStyles.button}>
          <Image source={bottomTabBar.captureImageIcon} />
        </TouchableOpacity>
      </View>
    </View>
  ) : (
    <View style={BottomTabBarStyles.mainContainer}>
      <View style={BottomTabBarStyles.bottomMenu}>
        <Image source={bottomTabBar.homeIcon} />
        <TouchableOpacity
          onPress={() => navigateToScreen('CaptureImage')}
          style={BottomTabBarStyles.button}>
          <Image source={bottomTabBar.addEntryIcon} />
        </TouchableOpacity>
        <Image source={bottomTabBar.summaryIcon} />
      </View>
    </View>
  );
}

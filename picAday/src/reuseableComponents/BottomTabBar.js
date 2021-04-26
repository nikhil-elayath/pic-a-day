import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import BottomTabBarStyles from '../assests/styles/reuseableComponents/BottomTabBar';
import {bottomTabBar} from '../assests/Icons';


export default function BottomTabBar(props) {
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
        <TouchableOpacity onPress={() => navigateToScreen('Home')}>
          <Image source={props.selectedIcon=="home"?bottomTabBar.homeIcon:bottomTabBar.homeIconLine} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigateToScreen('CaptureImage')}
          style={BottomTabBarStyles.button}>
          <Image source={bottomTabBar.addEntryIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigateToScreen('Summary')}>
        <Image source={props.selectedIcon=="summary"?bottomTabBar.summaryIcon:bottomTabBar.summaryIconLine} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import BottomTabBarStyles from '../assests/styles/reuseableComponents/BottomTabBar';

export default function BottomTabBar(props) {
  console.log('propdddds', props.navigation.navigate);

  const navigateToScreen = screenName => {
    props.navigation.navigate(screenName);
  };
  return (
    <View style={BottomTabBarStyles.mainContainer}>
      <View style={BottomTabBarStyles.bottomMenu}>
        <Text>Home</Text>

        {props.cameraOn === true ? (
          <TouchableOpacity onPress={props.captureImage}>
            <Text> Capture Image</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => navigateToScreen('CaptureImage')}>
            <Text>Add entry</Text>
          </TouchableOpacity>
        )}
        <Text>Summary</Text>
      </View>
    </View>
  );
}

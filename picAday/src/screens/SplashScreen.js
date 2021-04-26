// Splashscreen
// The first screen that would load up when the app is opened.
// Will have a  set time out for 2 seconds and after that will be navigated to the homescreen

import React, {useEffect} from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import SplashScreenStyles from '../assests/styles/screens/SplashScreen';
import BrandText from '../reuseableComponents/BrandText';

export default function SplashScreen(props) {
  
  useEffect(() => {
    //Navigating to Homescreen after 3 seconds post the screen has loaded
    setTimeout(() => {
      props.navigation.navigate('Home');
    }, 3000);
  }, []);

  return (
    <View style={SplashScreenStyles.brandContainer}>
      <TouchableOpacity>
        <BrandText />
      </TouchableOpacity>
    </View>
  );
}

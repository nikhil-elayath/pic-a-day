import React from 'react'
import {  Image  } from 'react-native'
import SplashScreen from "./src/screens/SplashScreen"
import Home from "./src/screens/Home"
import SpecificDay from "./src/screens/SpecificDay"
import Summary from "./src/screens/Summary"
import CaptureImage from "./src/screens/CaptureImage"
import { createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import BottomTabBar from "./src/reuseableComponents/BottomTabBar"




const navigator = createStackNavigator({
  Home:Home,
  BottomTabBar:BottomTabBar,
  Summary:Summary,
  SpecificDay:SpecificDay,
  SplashScreen:SplashScreen,
  CaptureImage:CaptureImage


},
  {
      initialRouteName: 'SplashScreen'
  });
export default createAppContainer(navigator);



 








import React from 'react'
import {  Image  } from 'react-native'
import SplashScreen from "./src/screens/SplashScreen"
import Home from "./src/screens/Home"
import SpecificDay from "./src/screens/SpecificDay"
import Summary from "./src/screens/Summary"
import Header from "./src/reuseableComponents/Header"
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import {bottomTabBar} from './src/assests/Icons';
import {createStackNavigator} from 'react-navigation-stack';
import BottomTabBar from "./src/reuseableComponents/BottomTabBar"




const navigator = createStackNavigator({
  Home:Home,
  BottomTabBar:BottomTabBar
},
  {
      initialRouteName: 'Home'
  });
export default createAppContainer(navigator);



 








import React from 'react';
import {Image} from 'react-native';
import SplashScreen from '../screens/SplashScreen';
import Home from '../screens/Home';
import SpecificDay from '../screens/SpecificDay';
import Summary from '../screens/Summary';
import DayEditView from '../screens/DayEditView';
import CaptureImage from '../screens/CaptureImage';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import BottomTabBar from '../reuseableComponents/BottomTabBar';
import BrandText from '../reuseableComponents/BrandText';
import Header from '../reuseableComponents/Header';
import ErrorScreen from "../reuseableComponents/ErrorScreen"

const navigator = createStackNavigator(
  {
    SplashScreen: {
      screen: SplashScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    Home: {
      screen: Home,
      navigationOptions: {
        header: (props)=><Header showBackButton={false} {...props} />,
      },
    },
    ErrorScreen: {
      screen: ErrorScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    BottomTabBar: {
      screen: BottomTabBar,
    },
    Summary: {
      screen: Summary,
      navigationOptions: {
        header: (props)=><Header showBackButton={false} {...props} />,
      },
    },
    SpecificDay: {
      screen: SpecificDay,
      navigationOptions: {
        header: (props)=><Header showBackButton={true} {...props} />,
      },
    },
    CaptureImage: {
      screen: CaptureImage,
      navigationOptions: {
        header: (props)=><Header showBackButton={true} {...props} />,
      },
    },
    DayEditView: {
      screen: DayEditView,
      navigationOptions: {
        header: (props)=><Header showBackButton={true} {...props} />,
      },
    },
  },
  {
    initialRouteName: 'SplashScreen',
    headerShown: false,
  },
);

export default createAppContainer(navigator);

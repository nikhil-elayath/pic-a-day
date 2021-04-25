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
        header: <Header showBackButton={true} />,
      },
    },
    BottomTabBar: {
      screen: BottomTabBar,
    },
    Summary: {
      screen: Summary,
      navigationOptions: {
        header: <Header showBackButton={false} />,
      },
    },
    SpecificDay: {
      screen: SpecificDay,
      navigationOptions: {
        header: <Header showBackButton={true} />,
      },
    },
    CaptureImage: {
      screen: CaptureImage,
      navigationOptions: {
        header: <Header showBackButton={true} />,
      },
    },
    DayEditView: {
      screen: DayEditView,
      navigationOptions: {
        header: <Header showBackButton={true} />,
      },
    },
  },
  {
    initialRouteName: 'SplashScreen',
    headerShown: false,
  },
);

export default createAppContainer(navigator);

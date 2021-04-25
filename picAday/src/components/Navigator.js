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
import Header from "../reuseableComponents/Header"

const navigator = createStackNavigator(
  {
    SplashScreen: {
      screen: SplashScreen,
      navigationOptions: {
        headerShown: false,
        headerTitle:props => <BrandText {...props}/>,
        header:<BrandText/>
      },
  
    },
    Home: {
      screen: Home,
      navigationOptions: {
        // headerTitle:props => <BrandText {...props}/>,
        header:<Header showBackButton={true} />
      },
    },
    BottomTabBar: {
      screen: BottomTabBar,
    },
    Summary: {
      screen: Summary,
    },
    SpecificDay: {
      screen: SpecificDay,
    },
    CaptureImage: {
      screen: CaptureImage,
    },
    DayEditView: {
      screen: DayEditView,
    },
  },
  {
    initialRouteName: 'SplashScreen',
    headerShown: false,
  },
);

export default createAppContainer(navigator);

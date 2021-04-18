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



const bottomTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen:Home,
      navigationOptions: {
        tabBarIcon: ( props) => (
          <Image  source={bottomTabBar.homeIcon}/>
        )
      }
    },
    SplashScreen:
    {screen:SplashScreen,
      // hiding thr bottom tab bar in splashscreen
      navigationOptions:()=>{
        return {
          tabBarVisible:false,
        };
        
     }
    },
    SpecificDay:
    {screen:SpecificDay,
      // hiding thr bottom tab bar in splashscreen
      navigationOptions:()=>{
        return {
          tabBarVisible:false,
        };
        
     }
    },
    Summary:
    {screen:Summary,
      navigationOptions: {
        tabBarIcon: (props) => (
          <Image  source={bottomTabBar.summaryIcon}/>
        )
      }

    },
      },
      {
        tabBarOptions: { showLabel: false }
      },
  {
    initialRouteName: 'SplashScreen'
  }
);



 

export default function App() {
  return (
    <AppContainer />
  
  )
}

const AppContainer = createAppContainer(bottomTabNavigator);






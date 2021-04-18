import React from 'react'
import { View, Text } from 'react-native'
import SplashScreen from "./src/screens/SplashScreen"
import Home from "./src/screens/Home"
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';


const bottomTabNavigator = createBottomTabNavigator(
  {
    Home: Home,
    SplashScreen:SplashScreen
    // Explore: ExploreScreen,
  },
  {
    initialRouteName: 'Home'
  }
);
 

export default function App() {
  return (
    <AppContainer />
  
  )
}

const AppContainer = createAppContainer(bottomTabNavigator);






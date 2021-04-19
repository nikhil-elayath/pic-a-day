import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import BottomTabBarStyles from "../assests/styles/reuseableComponents/BottomTabBar"


export default function BottomTabBar(props) {
    console.log("propdddds", props.navigation.navigate)
    
    const navigateToScreen=(screenName)=>{
       
            props.navigation.navigate(screenName)
        

    }
    return (
        <View style={BottomTabBarStyles.mainContainer}>
        <View style={BottomTabBarStyles.bottomMenu}>
            <Text>Home</Text>
            <TouchableOpacity onPress={()=>navigateToScreen("CaptureImage")}>
            <Text>Capture Image</Text>
            </TouchableOpacity>
            <Text>Summary</Text>
        </View>
        </View>
    )
}

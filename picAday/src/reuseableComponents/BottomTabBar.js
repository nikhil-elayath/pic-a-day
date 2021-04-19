import React from 'react'
import { View, Text } from 'react-native'
import BottomTabBarStyles from "../assests/styles/reuseableComponents/BottomTabBar"


export default function BottomTabBar() {
    return (
        <View style={BottomTabBarStyles.mainContainer}>
        <View style={BottomTabBarStyles.bottomMenu}>
            <Text>Home</Text>
            <Text>Summary</Text>
        </View>
        </View>
    )
}

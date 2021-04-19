import React from 'react'
import { View, Text } from 'react-native'

export default function BottomTabBar() {
    return (
        <View style={{  flex: 1,
            justifyContent: 'flex-end',}}>
        <View style={{display:"flex", flexDirection:"row", justifyContent:"space-evenly"}}>
            <Text>BottomTabBar</Text>
            <Text>BottomTabBar</Text>
            <Text>BottomTabBar</Text>
        </View>
        </View>
    )
}

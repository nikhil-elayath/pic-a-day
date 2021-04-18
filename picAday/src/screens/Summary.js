import React from 'react'
import { View, Text } from 'react-native'
import Header from "../reuseableComponents/Header"


export default function Summary() {
    return (
        <View>
            <Header showBackButton={true}/>
            <Text>Summary</Text>
        </View>
    )
}

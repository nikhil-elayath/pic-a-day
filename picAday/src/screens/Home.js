import React from 'react'
import { View, Text, Image } from 'react-native'
import Header from "../reuseableComponents/Header"


export default function Home() {
    return (
        <View>
            <Header showBackButton={true}/>
            <Text>Home screen</Text>
            </View>
    )
}

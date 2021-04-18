import React from 'react'
import { View, Text, Image } from 'react-native'
import Header from "../reuseableComponents/Header"
import ImageCard from "../components/ImageCard"


export default function Home() {
    return (
        <View>
            <Header showBackButton={true}/>
            <Text>Home screen</Text>
            <ImageCard/>
            </View>
    )
}

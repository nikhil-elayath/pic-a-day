import React from 'react'
import { View, Text, Image } from 'react-native'
import Header from "../reuseableComponents/Header"
import ImageCard from "../components/ImageCard"
import {homepage} from '../assests/Icons';
import HomeStyles from "../assests/styles/components/Home"



export default function Home() {
    return (
        <View>
            <Header showBackButton={true}/>
            <Text>Home screen</Text>
            <View style={HomeStyles.imageContainer}>
            <ImageCard 
            imageSource={homepage.dummyImage}
            
            />
            </View>
            </View>
    )
}

import React from 'react'
import { View } from 'react-native'
import Header from "../reuseableComponents/Header"
import ImageCard from "../components/ImageCard"
import {homepage} from '../assests/Icons';
import HomeStyles from "../assests/styles/components/Home"



export default function Home() {
    return (
        <View>
            <Header showBackButton={true}/>
            <View style={HomeStyles.imageContainer}>
            <ImageCard 
            imageSource={homepage.dummyImage}
            location={"Kochi, India"}
            date={"Jan 18"}
            temperature={"24"}
            />
           
            </View>
            </View>
    )
}

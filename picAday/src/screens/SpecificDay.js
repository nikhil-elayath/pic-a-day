import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import ImageCard from "../components/ImageCard"
import {homepage} from '../assests/Icons';
import HomeStyles from "../assests/styles/components/Home"
import Header from "../reuseableComponents/Header"



export default function SpecificDay() {
    return (
        <View>
            <Header showBackButton={true}/>
            <Text> specific</Text>
            <View style={HomeStyles.imageContainer}>
            <ImageCard 
            imageSource={homepage.dummyImage}
            location={"Kochi, India"}
            date={"Jan 18"}
            temperature={"24"}
            />
           
            </View>
            <View>
                <Text> Description for the iamge above</Text>
                </View>
            
        </View>
    )
}

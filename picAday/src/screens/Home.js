import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import Header from "../reuseableComponents/Header"
import BottomTabBar from "../reuseableComponents/BottomTabBar"
import ImageCard from "../components/ImageCard"
import {homepage} from '../assests/Icons';
import HomeStyles from "../assests/styles/components/Home"



export default function Home(props) {
    const navigateToSpecificDay=()=>{
        console.log("herer")
        props.navigation.navigate('SpecificDay')
    }
    return (
        <View style={{flex:1}}>
            <Header showBackButton={true}/>
            <View style={HomeStyles.imageContainer}>
            <TouchableOpacity onPress={navigateToSpecificDay}>
            <ImageCard 
            imageSource={homepage.dummyImage}
            location={"Kochi, India"}
            date={"Jan 18"}
            temperature={"24"}
            />
           
            </TouchableOpacity>
            </View>
            <BottomTabBar/>
            </View>
    )
}

import React from 'react'
import { View, Text, Image } from 'react-native'
import ImageCardStyles from "../assests/styles/components/ImageCard"

export default function ImageCard(props) {
    return (
        <View style={ImageCardStyles.mainContainer}>
            <Image source={props.imageSource} style={ImageCardStyles.image}/>
        </View>
    )
}

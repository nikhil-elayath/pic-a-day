import React from 'react'
import { View, Text, Image, ImageBackground } from 'react-native'
import ImageCardStyles from "../assests/styles/components/ImageCard"

export default function ImageCard(props) {
    return (
        <View style={ImageCardStyles.mainContainer}>
            <ImageBackground source={props.imageSource} style={ImageCardStyles.image}>
                <View style={ImageCardStyles.dateContainer}>
                    <Text style={ImageCardStyles.dateText}>Jan </Text>
                    <Text style={ImageCardStyles.dateText}>18 </Text>
                    </View>
                <View style={ImageCardStyles.bottomMainContainer}> 
                    <View style={ImageCardStyles.locationContainer}>
                        <Text style={ImageCardStyles.locationText}>
                        Kochi, India
                        </Text>
                        </View>
                    <View style={ImageCardStyles.temperatureContainer}>
                        <Text style={ImageCardStyles.temperatureText}>
                        24C
                        </Text>
                        </View>
                </View>
            </ImageBackground>
        </View>
    )
}

// =========================
// HOW TO USE THIS COMPONENT
// =========================
/*imageSource-->image you want to render
date--> text
location --> text
temperature --> text

*/


{
    /*   <ImageCrad
          {...props}
          imageSource={image}
          date={"July 18"}
          location={"Kocahi, India"}
          temperature={"14C"}
       /> 
  */
  }




import React from 'react'
import { View, Text, Image, ImageBackground } from 'react-native'
import ImageCardStyles from "../assests/styles/components/ImageCard"

export default function ImageCard(props) {
    return (
        <View style={ImageCardStyles.mainContainer}>
            <ImageBackground source={props.imageSource} style={ImageCardStyles.image}>
                <View style={ImageCardStyles.dateContainer}>
                    <Text style={ImageCardStyles.dateText}>{props.date} </Text>
                    {/* <Text style={ImageCardStyles.dateText}>18 </Text> */}
                    </View>
                <View style={ImageCardStyles.bottomMainContainer}> 
                    <View style={ImageCardStyles.locationContainer}>
                        <Text style={ImageCardStyles.locationText}>
                        {props.location}
                        </Text>
                        </View>
                    <View style={ImageCardStyles.temperatureContainer}>
                        <Text style={ImageCardStyles.temperatureText}>
                        {props.temperature}
                        </Text>
                        </View>
                </View>
            </ImageBackground>
        </View>
    )
}

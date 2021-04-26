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

import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import ImageCardStyles from '../assests/styles/components/ImageCard';
import {bottomTabBar, imageCard} from '../assests/Icons';
import BottomTabBarStyles from '../assests/styles/reuseableComponents/BottomTabBar';

export default function ImageCard(props) {
  return (
    <View style={ImageCardStyles.mainContainer}>
      <ImageBackground
        source={{width: 100, height: 200, uri: props.imageSource}}
        style={ImageCardStyles.image}>
        <View style={ImageCardStyles.dateContainer}>
          <Text style={ImageCardStyles.monthText}>{props.month} </Text>
          <Text style={ImageCardStyles.dateText}>{props.date} </Text>
        </View>
        <View style={ImageCardStyles.bottomMainContainer}>
          <View style={ImageCardStyles.locationContainer}>
            <View style={ImageCardStyles.locationIconContainer}>
              <Image source={imageCard.locationIcon} />
            </View>
            <View style={ImageCardStyles.locationTextContainer}>
              <Text style={ImageCardStyles.locationText}>{props.location}</Text>
            </View>
          </View>

          <View style={ImageCardStyles.temperatureContainer}>
            <View style={ImageCardStyles.locationIconContainer}>
              <Image source={imageCard.weatherIcon} />
            </View>
            <View style={ImageCardStyles.temperatureTextContainer}>
              <Text style={ImageCardStyles.temperatureText}>
                {props.temperature}
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
      {props.showCaptureButton == true && (
        <View style={ImageCardStyles.buttonContainer}>
          <TouchableOpacity
            onPress={props.captureImage}
            style={ImageCardStyles.button}>
            <Image source={bottomTabBar.captureImageIcon} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

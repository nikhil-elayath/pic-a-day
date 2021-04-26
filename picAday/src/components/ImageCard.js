// =========================
// HOW TO USE THIS COMPONENT
// =========================
/*imageSource-->image you want to render

*/

{
  /*   <ImageCrad
          {...props}
          imageSource={image}
          month={"July"}
          date={"18"}
          location={"Kochi, India"}
          temperature={"14C"}
          weatherIcon={image}
          locationIcon={image}
          showCaptureButton={boolean} --> to show the cature image icon below the image
       /> 
  */
}

// The reuseable card compoentn which is used to render the images

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
      {/* showing the capture icon which will be displayed only on day edit view
      i.e for images that are taken on the current day */}
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

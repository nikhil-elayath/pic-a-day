import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import ImageCard from '../components/ImageCard';
import {homepage} from '../assests/Icons';
import SpecificDayStyles from '../assests/styles/components/SpecificDay';
import BottomTabBar from '../reuseableComponents/BottomTabBar';
import {useDispatch, useSelector} from 'react-redux';

export default function SpecificDay(props) {
  console.log('from specifc', props.navigation.state.params.item);
  const dispatch = useDispatch();
  const store = useSelector(state => state.userEntry);
  return (
    <View style={SpecificDayStyles.mainContainer}>
      <View style={SpecificDayStyles.imageContainer}>
        <ImageCard
          imageSource={props.navigation.state.params.item.image_uri}
          location={props.navigation.state.params.item.image_location}
          date={props.navigation.state.params.item.entry_date}
          temperature={props.navigation.state.params.item.temperature}
        />
      </View>
      <View style={SpecificDayStyles.textContainer}>
        <Text>{props.navigation.state.params.item.image_description} </Text>
      </View>
    </View>
  );
}

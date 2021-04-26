import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import ImageCard from '../components/ImageCard';
import SpecificDayStyles from '../assests/styles/components/SpecificDay';
import {useDispatch, useSelector} from 'react-redux';
import formatDate from '../middlewares/FormatDate';

export default function SpecificDay(props) {
  const dispatch = useDispatch();
  const store = useSelector(state => state.userEntry);
  return (
    <View style={SpecificDayStyles.mainContainer}>
      <View style={SpecificDayStyles.imageContainer}>
        <ImageCard
          imageSource={props.navigation.state.params.item.image_uri}
          location={props.navigation.state.params.item.image_location}
          month={formatDate(props.navigation.state.params.item.entry_date, 'month')}
          date={formatDate(props.navigation.state.params.item.entry_date, 'date')}
          temperature={props.navigation.state.params.item.temperature}
        />
      </View>
      <View style={SpecificDayStyles.textContainer}>
        <Text>{props.navigation.state.params.item.image_description} </Text>
      </View>
    </View>
  );
}

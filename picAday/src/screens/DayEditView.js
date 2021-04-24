import React, {useEffect, useState} from 'react';
import {View, Text, Image, TextInput} from 'react-native';
import {createUserEntry, updateUserEntryById} from '../actions/UserEntry';
import {useDispatch, useSelector} from 'react-redux';
import ImageCard from '../components/ImageCard';


export default function DayEditView(props) {
  console.log("from day edit view")
  const dispatch = useDispatch();
  const store = useSelector(state => state.userEntry.userEntryId);
  const [imageLocation, setImgLocation] = useState('');

  // use effect to fetch the data by a particular userentry id which is recieved in params from capture iamge image screen


  const onChangeTextValue = async text => {
    let data = {
      imageUri: props.navigation.state.params.imageUri,
      imageDescription: text,
      userEntryId: store.id && store.id,
    };
    // Updating the previous entry which was created and using that id
    await dispatch(updateUserEntryById(data));
  };

  return (
    <>
      <View>
        <ImageCard
          imageSource={item.image_uri}
          location={item.image_location}
          date={item.entry_date}
          temperature={item.temperature}
        />
        <TextInput
          placeholder={'Type your thoughts...'}
          placeholderTextColor={'black'}
          onEndEditing={text => onChangeTextValue(text.nativeEvent.text)}
        />
      </View>
    </>
  );
}

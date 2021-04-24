import React, {useEffect, useState} from 'react';
import {View, TextInput} from 'react-native';
import {updateUserEntryById, getUserEntryById} from '../actions/UserEntry';
import {useDispatch, useSelector} from 'react-redux';
import ImageCard from '../components/ImageCard';

export default function DayEditView(props) {
  const dispatch = useDispatch();
  const store = useSelector(state => state.userEntry.userEntryId);
  const specificUserEntry = useSelector(
    state => state.userEntry.specificUserEntry,
  );

  // use effect to fetch the data by a particular userentry id which is recieved in params from capture iamge image screen4
  useEffect(() => {
    {
      dispatch(
        getUserEntryById(
          props.entryId ? props.entryId : store.id != undefined && store.id,
        ),
      );
    }
  }, [store.id,props.entryId]);

  const onChangeTextValue = async text => {
    let data = {
      imageUri:
        specificUserEntry.result &&
        specificUserEntry.result[0] &&
        specificUserEntry.result[0].image_uri,
      imageDescription: text,
      userEntryId: store.id && store.id,
    };
    // Updating the previous entry which was created and using that id
    await dispatch(updateUserEntryById(data));
  };

  return (
    <>
      <View>
        <View style={{backgroundColor: 'blue', height: 50}}>
          <ImageCard
            imageSource={
              specificUserEntry.result &&
              specificUserEntry.result[0] &&
              specificUserEntry.result[0].image_uri
            }
            location={
              specificUserEntry.result &&
              specificUserEntry.result[0] &&
              specificUserEntry.result[0].image_location
            }
            date={
              specificUserEntry.result &&
              specificUserEntry.result[0] &&
              specificUserEntry.result[0].entry_date
            }
            temperature={
              specificUserEntry.result &&
              specificUserEntry.result[0] &&
              specificUserEntry.result[0].temperature
            }
          />
        </View>
        <TextInput
          placeholder={'Type your thoughts...'}
          placeholderTextColor={'black'}
          style={{backgroundColor: 'red'}}
          onEndEditing={text => onChangeTextValue(text.nativeEvent.text)}
        />
      </View>
    </>
  );
}

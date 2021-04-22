import React, {useEffect, useState} from 'react';
import {View, Text, Image, TextInput} from 'react-native';
import {createUserEntry, updateUserEntryById} from '../actions/UserEntry';
import {useDispatch, useSelector} from 'react-redux';

export default function DayEditView(props) {
  const dispatch = useDispatch();
  const store = useSelector(state => state.userEntry.userEntryId);

  // use effect to write as soon as component is mounted
  // action call to write the new entry to database and return the id
  // keep updating that id for future changes of iamge or text
  // use effect should be rendered only when the image uri is changed
  useEffect(async () => {
    let data = {imageUri: props.navigation.state.params.imageUri};
    dispatch(createUserEntry(data));
  }, []);

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
        <Image
          style={{height: '50%'}}
          source={{uri: props.navigation.state.params.imageUri}}
        />
        <TextInput
          style={{color: 'black', backgroundColor: 'red'}}
          placeholder={'Type your thoughts...'}
          placeholderTextColor={'black'}
          onEndEditing={text => onChangeTextValue(text.nativeEvent.text)}
        />
      </View>
    </>
  );
}

import React, {useEffect, useState} from 'react';
import {View, TextInput, KeyboardAvoidingView} from 'react-native';
import {updateUserEntryById, getUserEntryById} from '../actions/UserEntry';
import {useDispatch, useSelector} from 'react-redux';
import ImageCard from '../components/ImageCard';
import DayEditViewStyles from '../assests/styles/screens/DayEditView';
import formatDate from '../middlewares/FormatDate';
export default function DayEditView(props) {
  const [showCurrentText, setShowCurrentText] = React.useState(false);
  const [userEnteredText, setUserEnteredText] = React.useState('');

  const navigateToScreen = screenName => {
    props.navigation.navigate(screenName, {
      imageData: specificUserEntry.result[0],
    });
  };
  const dispatch = useDispatch();
  const store = useSelector(state => state.userEntry.userEntryId);
  const specificUserEntry = useSelector(
    state => state.userEntry.specificUserEntry,
  );

  // use effect to fetch the data by a particular userentry id which is recieved in params from capture iamge image screen4
  useEffect(async () => {
    console.log(
      'day ',
      props.navigation.navigate &&
        props.navigation.state 
        // props.navigation.state.params.userEntryId &&
        // props.navigation.state.params.userEntryId,
    );

    props.navigation &&
    props.navigation.state &&
    props.navigation.state.params.userEntryId
      ? await dispatch(
          getUserEntryById(props.navigation.state.params.userEntryId),
        )
      : store.id &&
        store.id != undefined &&
        (await dispatch(getUserEntryById(store.id)));
  }, []);

  const onChangeTextValue = async text => {
    await setShowCurrentText(true);
    await setUserEnteredText(text);

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
    <KeyboardAvoidingView
      style={{flex: 0}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={DayEditViewStyles.imageCardContainer}>
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
          month={formatDate(
            specificUserEntry.result &&
              specificUserEntry.result[0] &&
              specificUserEntry.result[0].entry_date,
            'month',
          )}
          date={formatDate(
            specificUserEntry.result &&
              specificUserEntry.result[0] &&
              specificUserEntry.result[0].entry_date,
            'date',
          )}
          temperature={
            specificUserEntry.result &&
            specificUserEntry.result[0] &&
            specificUserEntry.result[0].temperature
          }
          showCaptureButton={true}
          captureImage={() => navigateToScreen('CaptureImage')}
        />
      </View>
      <View style={DayEditViewStyles.textInputContainer}>
        <TextInput
          placeholder={'Type your thoughts...'}
          placeholderTextColor={'black'}
          value={
            specificUserEntry.result &&
            specificUserEntry.result[0] &&
            specificUserEntry.result[0].image_description &&
            specificUserEntry.result[0].image_description != 'undefined'
              ? specificUserEntry.result[0].image_description
              : showCurrentText == true
              ? userEnteredText
              : null
          }
          onEndEditing={text => onChangeTextValue(text.nativeEvent.text)}
        />
      </View>
    </KeyboardAvoidingView>
  );
}

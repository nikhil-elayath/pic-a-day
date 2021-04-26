import React, {useEffect} from 'react';
import {
  TouchableOpacity,
  View,
  Image,
  BackHandler,
  ScrollView,
} from 'react-native';
import BottomTabBar from '../reuseableComponents/BottomTabBar';
import ImageCard from '../components/ImageCard';
import HomeStyles from '../assests/styles/components/Home';
import {useDispatch, useSelector} from 'react-redux';
import {getAllUserEntry} from '../actions/UserEntry';

export default function Home(props) {
  const dispatch = useDispatch();
  const store = useSelector(state => state.userEntry);
  function handleBackButtonClick() {
    props.navigation.push('Home');
    return true;
  }

  useEffect(async () => {
    //Navigating to Homescreen after 3 seconds post the screen has loaded
    await dispatch(getAllUserEntry());
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener(
        'hardwareBackPress',
        handleBackButtonClick,
      );
    };
  }, []);

  const navigateToSpecificDay = item => {
    // logic to check the date and navigate accordingly
    // if date == current date navigate to day edit view as entry is editable
    // otherwise navigate to specific day and editing is not available

    let currentDate = new Date();

    if (
      currentDate.toISOString().split('T')[0] == item.entry_date.split('T')[0]
    ) {
      props.navigation.navigate('DayEditView', {userEntryId: item.id});
    } else {
      props.navigation.navigate('SpecificDay', {item});
    }
  };
  return (
    <View style={{flex: 1}}>
      <View style={HomeStyles.imageContainer}>
        <ScrollView style={{height: '100%'}}>
          {store.userEntry &&
            store.userEntry.length != 0 &&
            store.userEntry.result.map((item, index) => {
              // console.log("item home", item)
              return (
                <TouchableOpacity
                  key={index}
                  style={{height: 250}}
                  onPress={() => navigateToSpecificDay(item)}>
                  <ImageCard
                    key={index}
                    imageSource={item.image_uri}
                    location={item.image_location}
                    date={item.entry_date}
                    temperature={item.temperature}
                  />
                </TouchableOpacity>
              );
            })}
        </ScrollView>
      </View>
      <BottomTabBar navigation={props.navigation} selectedIcon={'home'} />
    </View>
  );
}

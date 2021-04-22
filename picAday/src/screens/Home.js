import React, {useEffect} from 'react';
import {TouchableOpacity, View} from 'react-native';
import Header from '../reuseableComponents/Header';
import BottomTabBar from '../reuseableComponents/BottomTabBar';
import ImageCard from '../components/ImageCard';
import {homepage} from '../assests/Icons';
import HomeStyles from '../assests/styles/components/Home';
import {useDispatch, useSelector} from 'react-redux';
import {getAllUserEntry} from '../actions/UserEntry';

export default function Home(props) {
  const dispatch = useDispatch();
  const store = useSelector(state => state.userEntry);
  // console.log("stoe", store)

  useEffect(() => {
    //Navigating to Homescreen after 3 seconds post the screen has loaded
    dispatch(getAllUserEntry());
  }, []);

  const navigateToSpecificDay = item => {
    props.navigation.navigate &&
      props.navigation.navigate('SpecificDay', {item});
  };
  return (
    <View style={{flex: 1}}>
      {/* <Header showBackButton={true}/> */}
      <View style={HomeStyles.imageContainer}>
        {store.userEntry &&
          store.userEntry.length != 0 &&
          store.userEntry.result.map((item, index) => {
            return (
              <TouchableOpacity onPress={() => navigateToSpecificDay(item)}>
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
      </View>
      <BottomTabBar navigation={props.navigation} />
    </View>
  );
}

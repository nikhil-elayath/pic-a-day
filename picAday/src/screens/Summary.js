import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getSummaryData} from '../actions/UserEntry';

import SummaryStyles from '../assests/styles/screens/Summary';

export default function Summary(props) {
  console.log('props froom summary', props);
  const dispatch = useDispatch();
  const store = useSelector(
    state => state.userEntry.summaryData && state.userEntry.summaryData,
  );
  console.log('store from summary', store);
  useEffect(() => {
    //Navigating to Homescreen after 3 seconds post the screen has loaded
    dispatch(getSummaryData());
  }, []);
  return (
    <>
      <View style={SummaryStyles.mainContainer}>
        <View style={SummaryStyles.streakContainer}>
          <View>
            <Text>Days </Text>
          </View>
          <View>
            <Text>
              {store.totalEntriesMadeByUser}/{store.numberOfDaysSinceFirstEntry}{' '}
            </Text>
          </View>
          <View>
            <Text>
              You have recorded {store.totalEntriesMadeByUser} days since the
              first day
            </Text>
          </View>
        </View>

        <View style={SummaryStyles.hottestDayContainer}>
          <View>
            <Text>Hottest Day </Text>
            <Text>
              {store.highestTemperatureData &&
                store.highestTemperatureData.highestTemperature}{' '}
            </Text>
            <Text>
              {store.highestTemperatureData &&
                store.highestTemperatureData.highestTemperatureDate}{' '}
            </Text>
          </View>
        </View>
        <View style={SummaryStyles.coldestDayContainer}>
          <View>
            <Text>Codlewst day Day </Text>
            <Text>
              {store.lowestTemperatureData &&
                store.lowestTemperatureData.lowestTemperature}{' '}
            </Text>
            <Text>
              {store.lowestTemperatureData &&
                store.lowestTemperatureData.lowestTemperatureDate}{' '}
            </Text>
          </View>
        </View>
      </View>
    </>
  );
}

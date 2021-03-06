// The summary screen which contains summary data

import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getSummaryData} from '../actions/UserEntry';
import BottomTabBar from '../reuseableComponents/BottomTabBar';
import SummaryStyles from '../assests/styles/screens/Summary';

export default function Summary(props) {
  const dispatch = useDispatch();
  const store = useSelector(
    state => state.userEntry.summaryData && state.userEntry.summaryData,
  );
  useEffect(() => {
    dispatch(getSummaryData());
  }, []);
  return (
    <>
      <View style={SummaryStyles.mainContainer}>
        {/* Making sure user has made atleast one entry and displaying the summary data accordingly */}
        {store.totalEntriesMadeByUser != 0 ? (
          <>
            <View style={SummaryStyles.streakContainer}>
              <View style={SummaryStyles.headingTextContainer}>
                <Text style={SummaryStyles.headingText}>Days </Text>
              </View>
              <View>
                <Text style={SummaryStyles.descriptionText}>
                  {store.totalEntriesMadeByUser}/
                  {store.numberOfDaysSinceFirstEntry}{' '}
                </Text>
              </View>
              <View>
                <Text>
                  You have recorded {store.totalEntriesMadeByUser} days since
                  the first day
                </Text>
              </View>
            </View>

            <View style={SummaryStyles.hottestDayContainer}>
              <View style={SummaryStyles.headingTextContainer}>
                <Text style={SummaryStyles.headingText}>Hottest Day </Text>
                <Text style={SummaryStyles.descriptionText}>
                  {store.highestTemperatureData &&
                    store.highestTemperatureData.highestTemperature}
                  &deg;
                </Text>
                <Text>
                  {store.highestTemperatureData &&
                    store.highestTemperatureData.highestTemperatureDate}
                </Text>
              </View>
            </View>
            <View style={SummaryStyles.coldestDayContainer}>
              <View style={SummaryStyles.headingTextContainer}>
                <Text style={SummaryStyles.headingText}>Coldest day </Text>
                <Text style={SummaryStyles.descriptionText}>
                  {store.lowestTemperatureData &&
                    store.lowestTemperatureData.lowestTemperature}
                  &deg;
                </Text>
                <Text>
                  {store.lowestTemperatureData &&
                    store.lowestTemperatureData.lowestTemperatureDate}
                </Text>
              </View>
            </View>
            <BottomTabBar
              navigation={props.navigation}
              selectedIcon={'summary'}
            />
          </>
        ) : (
          <>
            <Text> No data present</Text>

            <BottomTabBar
              navigation={props.navigation}
              selectedIcon={'summary'}
            />
          </>
        )}
      </View>
    </>
  );
}

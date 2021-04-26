// This is the error screen that will be visible whenever anhy api requests return status code other than 200
import React from 'react'
import { View, Text } from 'react-native'
import ErrorScreenStyles from "../assests/styles/reuseableComponents/ErrorScreen"
import BottomTabBar  from "../reuseableComponents/BottomTabBar"

export default function ErrorScreen(props) {
    return (
        <View style={ErrorScreenStyles.mainContainer}>
            <Text style={ErrorScreenStyles.heading}>Oops something went wrong. Please try again</Text>
            <BottomTabBar navigation={props.navigation} selectedIcon={'home'} />

        </View>
    )
}

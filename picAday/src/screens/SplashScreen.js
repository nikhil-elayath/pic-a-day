// Splashscreen [Nikhil]
// The first screen that would load up when the app is opened.
// Will have a  set time out for 2 seconds and after that will be navigated to the homescreen



import React from 'react'
import { View, Text, Button } from 'react-native'

export default function SplashScreen(props) {
    return (
        <View >
            <Button onPress={props.navigation.navigate('Home')}>

                sPLASHSCREEN
            </Button>
        </View>
    )
}

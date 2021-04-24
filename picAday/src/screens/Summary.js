import React from 'react'
import { View, Text } from 'react-native'
import Header from "../reuseableComponents/Header"
import SummaryStyles from "../assests/styles/screens/Summary"


export default function Summary(props) {
    console.log("props froom summary", props)
    return (
        <>
            <Header showBackButton={true}/>
        <View style={SummaryStyles.mainContainer}>
           
            <View style={SummaryStyles.streakContainer}>
            <View>

                <Text>Days </Text>
                </View>
                <View>
                <Text>17/19 </Text>
                </View>
                <View>
                <Text>You have recorded since 17 days </Text>
                </View>
            </View>
            
            <View style={SummaryStyles.hottestDayContainer}>
            <View>
                <Text>Hottest Day </Text>
                <Text>30C </Text>
                <Text>Sunday  </Text>
                </View>
            </View>
            <View style={SummaryStyles.coldestDayContainer}>
            <View>
                <Text>Codlewst day Day </Text>
                <Text>30C </Text>
                <Text>Sunday  </Text>
                </View>
            </View>
            </View>
            
            </>
    )
}

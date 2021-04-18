import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import {header} from '../assests/Icons';


export default function Header(props) {
    return (
        <View>
            <TouchableOpacity
          style={{padding: 4}}
          onPress={
            props.backPress ? props.backPress : () => props.navigation.goBack()
          }>
              {/* showing the back button only when required */}
              {props.showBackButton==true &&  <Image
            testID={props.backPressImageTestID}
            source={header.backIcon}
          />}
         
        </TouchableOpacity>
            <Text>Header</Text>
        </View>
    )
}

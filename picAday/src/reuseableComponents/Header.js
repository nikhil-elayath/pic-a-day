// =========================
// HOW TO USE THIS COMPONENT
// =========================
// backPress props is optional if not provided it will do navigation.goBack()
{
    /*   <Header
          {...props}
          title="Your Screen's Title"
          backPress={() => {}}
       /> 
  */
  }
  


import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import {header} from '../assests/Icons';
import HeaderStyles from "../assests/styles/reuseableComponents/Header"



export default function Header(props) {
    return (
        <View style={HeaderStyles.mainContainer}>
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

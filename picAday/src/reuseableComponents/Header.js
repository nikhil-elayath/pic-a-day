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

import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {header} from '../assests/Icons';
import HeaderStyles from '../assests/styles/reuseableComponents/Header';
import BrandText from '../reuseableComponents/BrandText';

export default function Header(props) {
  console.log('header');
  return (
    <View style={HeaderStyles.mainContainer}>
      {props.showBackButton == true && (
        <View style={HeaderStyles.backArrowContainer}>
          <TouchableOpacity
            onPress={
              props.backPress
                ? props.backPress
                : () => props.navigation.goBack()
            }>
            <Image
            style={HeaderStyles.backArrowImage}
              testID={props.backPressImageTestID}
              source={header.backIcon}
            />
          </TouchableOpacity>
        </View>
      )}
      
      <View style={HeaderStyles.brandContainer}>
        <BrandText />
      </View>
      <View style={{flex:1}}>
      </View>
      
    </View>
  );
}

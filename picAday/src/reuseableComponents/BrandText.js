import React from 'react';
import {View, Text} from 'react-native';
import BrandTextStyles from '../assests/styles/reuseableComponents/BrandText';

export default function BrandText() {
  return (
    <View>
      <Text style={BrandTextStyles.picText}>
        pic
        <Text style={BrandTextStyles.aText}>
          a<Text style={BrandTextStyles.dayText}>day</Text>
        </Text>
      </Text>
    </View>
  );
}

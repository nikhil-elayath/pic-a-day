import React , {useEffect, useRef, useState}  from 'react'
import { View, Text, Image } from 'react-native'

export default function DayEditView(props) {
    console.log("day edit view", props.navigation.state.params.imageUri)
    const [imgUri, setImageUri] = useState(null);

    useEffect(() => {
        //Navigating to Homescreen after 3 seconds post the screen has loaded 
        setImageUri(props.navigation.state.params.imageUri)
          
    
          
        }, [props.navigation.state.params.imageUri])
    
    return (
        <View>
            <Text>DayEditView</Text>
            <Image style={{height:"100%"}}source={{uri:imgUri}}/>
            {/* source="{{uri:" img}} */}
        </View>
    )
}

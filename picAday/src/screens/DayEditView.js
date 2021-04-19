import React , {useEffect, useRef, useState}  from 'react'
import { View, Text, Image, TextInput } from 'react-native'

export default function DayEditView(props) {
    console.log("day edit view", props.navigation.state.params.imageUri)
    const [imgUri, setImageUri] = useState(null);
    const [imageDescription, setImageDescription] = useState('');

    const onChangeTextValue=(text)=>{
        console.log("value", text)
        setImageDescription(imageDescription)
        // call to db to upload the image uri and description

    }

    useEffect(() => {
        //Navigating to Homescreen after 3 seconds post the screen has loaded 
        setImageUri(props.navigation.state.params.imageUri)
          
    
          
        }, [props.navigation.state.params.imageUri])
    
    return (
        <>
        <View>
            <Text>DayEditView</Text>
            <Image style={{height:"50%"}}source={{uri:'file:///data/user/0/com.picaday/cache/Camera/c3b57b9a-5126-4d63-bb50-7e73cedf5b41.jpg'}}/>
           <TextInput style={{ color:"black"}} placeholder={"Type your thoughts..."} placeholderTextColor={"black"} onChangeText={(text)=>onChangeTextValue(text)}/>
        </View>
           </>
    )
}

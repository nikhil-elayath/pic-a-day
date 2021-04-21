import React , {useEffect, useRef, useState}  from 'react'
import { View, Text, Image, TextInput } from 'react-native'
import { createUserEntry } from "../actions/UserEntry";
import { useDispatch, useSelector } from "react-redux";



export default function DayEditView(props) {
    const dispatch = useDispatch();

    console.log("day edit view", props.navigation.state.params.imageUri)
    const [imgUri, setImageUri] = useState(null);
    const [imageDescription, setImageDescription] = useState('');

    const onChangeTextValue=async(text)=>{
        console.log("value", text)
       await setImageDescription(text)
        // call to db to upload the image uri and description
        let data={
            imageUri:imgUri,
            imageDescription:imageDescription
        }
       await dispatch(createUserEntry(data))

    }

    useEffect(() => {
        //Navigating to Homescreen after 3 seconds post the screen has loaded 
        setImageUri(props.navigation.state.params.imageUri)
          
        }, [props.navigation.state.params.imageUri])
    
    return (
        <>
        <View>
            <Text>DayEditView</Text>
            <Image style={{height:"50%"}}source={{uri:imgUri}}/>
           <TextInput style={{ color:"black", backgroundColor:"red"}} placeholder={"Type your thoughts..."} placeholderTextColor={"black"}  onEndEditing={(text)=>onChangeTextValue(text.nativeEvent.text)}/>
        </View>
           </>
    )
}

import React , {useEffect, useState}from 'react'
import { View, Text, Image, TextInput, } from 'react-native'
import { createUserEntry, updateUserEntryById } from "../actions/UserEntry";
import { useDispatch, useSelector } from "react-redux";
import Geolocation from 'react-native-geolocation-service';



export default function DayEditView(props) {
    const dispatch = useDispatch();
    const store = useSelector((state) => state.userEntry.userEntryId);
    const [imageLocation, setImgLocation] = useState('');

    // use effect to write as soon as component is mounted
    // action call to write the new entry to database and return the id
    // keep updating that id for future changes of iamge or text
    // use effect should be rendered only when the image uri is changed
    useEffect(async() => {

        try{
        Geolocation.getCurrentPosition(
            (position) => {
                const url = `https://reverse.geocoder.ls.hereapi.com/6.2/reversegeocode.json?apiKey=VQCnCJVY_c9-7ezRY5xlhmh_QtFkt8hC-dlYMyc-4Bw&mode=retrieveAddresses&prox=${position.coords.latitude},${position.coords.longitude}`
                fetch(url)
      .then(res => res.json())
      .then(async(resJson) => {
          let imageLocation=resJson.Response.View[0].Result[0].Location.Address.County+","+resJson.Response.View[0].Result[0].Location.Address.AdditionalData[0].value
        setImgLocation(imageLocation)
         
   
        
    })
    .catch((e) => {
        console.log('Error in getAddressFromCoordinates', e)
    })
})

// getting temperature
const openweather_api = "https://api.openweathermap.org/data/2.5/weather?q=Mumbai&appid=cad6b217b338049c1700977e5c93f721&units=metric";
fetch(openweather_api)
      .then(res => res.json())
      .then(async(resJson) => {
          let data={imageUri:props.navigation.state.params.imageUri, imageLocation:imageLocation, imageTemperature:resJson.main.temp}
        await dispatch(createUserEntry(data))
      }).catch((e) => {
        console.log('Error in ', e)
    })


            
        }
        catch(err)
        {
            console.log(err)
        }
        },[])
  

    const onChangeTextValue=async(text)=>{
 
        let data={
            imageUri:props.navigation.state.params.imageUri,
            imageDescription:text,
            userEntryId:store.id&&store.id,
        }
        // Updating the previous entry which was created and using that id
       await dispatch(updateUserEntryById(data))

    }

    
    return (
        <>
        <View>
            <Text>DayEditView</Text>
            <Image style={{height:"50%"}}source={{uri:props.navigation.state.params.imageUri}}/>
           <TextInput style={{ color:"black", backgroundColor:"red"}} placeholder={"Type your thoughts..."} placeholderTextColor={"black"}  onEndEditing={(text)=>onChangeTextValue(text.nativeEvent.text)}/>
        </View>
           </>
    )
}

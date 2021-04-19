import React , {useEffect}from 'react'
import { TouchableOpacity, View } from 'react-native'
import Header from "../reuseableComponents/Header"
import BottomTabBar from "../reuseableComponents/BottomTabBar"
import ImageCard from "../components/ImageCard"
import {homepage} from '../assests/Icons';
import HomeStyles from "../assests/styles/components/Home"
import { useDispatch, useSelector } from "react-redux";
import { getAllUserEntry } from "../actions/UserEntry";





export default function Home(props) {
    const dispatch = useDispatch();
    const store = useSelector((state) => state.userEntry);
    console.log("stoe", store)

    useEffect(() => {
        //Navigating to Homescreen after 3 seconds post the screen has loaded 
          dispatch(getAllUserEntry())
    
          
        }, [])




    const navigateToSpecificDay=()=>{
        console.log("herer", props)
        props.navigation.navigate('SpecificDay')
    }
    return (
        <View style={{flex:1}}>
            {/* <Header showBackButton={true}/> */}
            <View style={HomeStyles.imageContainer}>
            {store.userEntry&&store.userEntry.length!=0&&store.userEntry.result.map((item, index) => {
                return (

            <TouchableOpacity onPress={navigateToSpecificDay}>
            <ImageCard 
            imageSource={homepage.dummyImage}
            location={"Kochi, India"}
            date={"Jan 18"}
            temperature={"24"}
            />
           
            </TouchableOpacity>
                )
            
            })}
            </View>
            <BottomTabBar
            navigation={props.navigation}

            
            
            />
            </View>
    )
}

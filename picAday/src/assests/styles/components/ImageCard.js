import {StyleSheet, Dimensions} from 'react-native';
// import {widthPercentageToDP as wp} from 'react-native-responsive-screen';


const ImageCardStyles = StyleSheet.create({
    mainContainer:{
        height:"100%",
       

       

    },
    image:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-between",
        height:"100%",
        width:"100%"
    },
    dateText:{
        color:"white"

    },
    locationText:{
        color:"white"
    },
    temperatureText:{
        color:"white"
    },
    bottomMainContainer:{
        padding:10,
        display:"flex",
        justifyContent:"space-between",
        flexDirection:"row"
    }



})
export default ImageCardStyles;

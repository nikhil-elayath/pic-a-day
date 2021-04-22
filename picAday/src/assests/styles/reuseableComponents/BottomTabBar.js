import {StyleSheet, Dimensions} from 'react-native';

const BottomTabBar = StyleSheet.create({
    mainContainer:{
        flex: 1,
        justifyContent: 'flex-end',
        position: 'absolute', left: 0, right: 0, bottom: 0
     
    },
    bottomMenu:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between"
    }


})
export default BottomTabBar;

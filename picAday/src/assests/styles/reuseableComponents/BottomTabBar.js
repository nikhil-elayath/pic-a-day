import {StyleSheet, Dimensions} from 'react-native';

const BottomTabBar = StyleSheet.create({
    mainContainer:{
        flex: 1,
        justifyContent: 'flex-end',
        padding:10
    },
    bottomMenu:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between"
    }


})
export default BottomTabBar;

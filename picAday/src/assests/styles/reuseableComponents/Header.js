import {StyleSheet, Dimensions} from 'react-native';

const HeaderStyles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    paddingTop: 35,
    paddingBottom: 10,
    alignItems: 'center',
    textAlign: 'center',
  },
  brandContainer: {
    alignItems: 'center',
  },
  backArrowContainer:{
      flex:1,
      paddingLeft:10
  },
  backArrowImage:{
      height:20,
      width:10
  },
  mainContainerWithoutBackButton:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingTop: 35,
    paddingBottom: 10,
    alignItems: 'center',
    textAlign: 'center',
  }
});
export default HeaderStyles;

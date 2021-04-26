import {StyleSheet, Dimensions} from 'react-native';

const ImageCardStyles = StyleSheet.create({
  mainContainer: {
    height: '100%',
  },
  image: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    width: '100%',
  },
  dateContainer:{
    padding:10
  },
  dateText: {
    color: 'white',
    fontSize: 25,
    fontWeight:"bold"
  },
  monthText: {
    color: 'white',
    fontSize: 18,
    fontWeight:"bold"
  },
  locationText: {
    color: 'white',
    fontSize: 18,
  },
  temperatureText: {
    color: 'white',
    fontSize: 18,
  },
  bottomMainContainer: {
    padding: 10,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  button: {
    top: -22.5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 27,
    backgroundColor: 'white',
  },
  buttonContainer: {
    alignItems: 'center',
  },

  locationContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  locationTextContainer: {
    padding: 10,
  },

  temperatureContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  temperatureTextContainer: {
    padding: 10,
  },
});
export default ImageCardStyles;

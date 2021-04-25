import {StyleSheet, Dimensions} from 'react-native';

const ImageCardStyles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    // backgroundColor: 'blue',
  },
  image: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    width: '100%',
  },
  dateText: {
    color: 'white',
    fontSize:18

  },
  locationText: {
    color: 'white',
    fontSize:18
  },
  temperatureText: {
    color: 'white',
    fontSize:18

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

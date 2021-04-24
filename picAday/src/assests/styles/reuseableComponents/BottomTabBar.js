import {StyleSheet, Dimensions} from 'react-native';

const BottomTabBar = StyleSheet.create({
  mainContainerForCameraOnScreen: {
    flex: 1,
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 50,
    padding: 10,
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'white',
    height: 50,
    padding: 10,
  },
  bottomMenuForCameraOnScreen: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:"center"
  },
  bottomMenu: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems:"center"
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
});
export default BottomTabBar;

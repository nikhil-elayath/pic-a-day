import {StyleSheet, Dimensions} from 'react-native';

const BottomTabBar = StyleSheet.create({
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
  bottomMenu: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
   button: {
    top: -22.5,
    // justifyContent: 'center',
    // alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 27,
    backgroundColor: '#E94F37',
  },
});
export default BottomTabBar;

import {StyleSheet, Dimensions} from 'react-native';

const SummaryStyles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    backgroundColor: '#F8F9F9',
    flex: 1,
  },
  streakContainer: {
    width: '100%',
    height: '28%',
    alignItems: 'center',
    backgroundColor: '#F8F9F9',
    borderBottomWidth: 1,
    borderBottomColor: '#E4E4E5',
    display: 'flex',
    justifyContent: 'center',
  },
  hottestDayContainer: {
    width: '100%',
    height: '28%',
    alignItems: 'center',
    backgroundColor: '#F8F9F9',
    borderBottomWidth: 1,
    borderBottomColor: '#E4E4E5',
    display: 'flex',
    justifyContent: 'center',
  },
  coldestDayContainer: {
    width: '100%',
    height: '28%',
    alignItems: 'center',
    backgroundColor: '#F8F9F9',
    borderBottomWidth: 1,
    borderBottomColor: '#E4E4E5',
    display: 'flex',
    justifyContent: 'center',
  },
  headingTextContainer: {
    // padding:20
  },
  headingText: {
    color: '#314743',
    fontWeight: 'bold',
    fontSize: 20,
  },
  descriptionText: {
    fontSize: 50,
    color: '#314743',
    fontWeight: 'bold',
  },
});
export default SummaryStyles;

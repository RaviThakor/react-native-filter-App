import {StyleSheet, Dimensions} from 'react-native';

const screen = Dimensions.get('screen');

const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    padding: 10,
  },
  tabsContainer: {},
  cardsContainerStyle: {
    marginTop: 15,
    elevation: 10,
    backgroundColor: '#FFFFFF',
    height: screen.height - 200,
  },
  loaderStyle: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  noDataContainer: {
    marginTop: 15,
    elevation: 10,
    backgroundColor: '#FFFFFF',
    height: screen.height - 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;

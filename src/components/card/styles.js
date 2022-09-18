import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    borderRadius: 5,
    elevation: 10,
    margin: 10,
    backgroundColor: '#FFFFFF',
  },
  playImageStyle: {
    height: 60,
    width: 60,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  playAndTitleContainer: {
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 10,
  },
  titleDescriptionContainer: {
    display: 'flex',
    flex: 1,
    paddingLeft: 7,
    paddingRight: 5,
  },
  title: {
    fontWeight: '700',
    color: '#000000',
  },
  description: {
    fontSize: 13,
  },
});

export default styles;

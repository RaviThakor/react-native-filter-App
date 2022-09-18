import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#dddddd',
    borderRadius: 2,
    paddingLeft: 10,
  },
  title: {
    color: '#000000',
    fontWeight: '700',
  },
  dropdownStyle: {
    backgroundColor: '#FFFFFF',
    width: '75%',
    height: 'auto',
    paddingVertical: 5,
    textAlign: 'left',
  },
  buttonTextStyle: {
    fontSize: 15,
    color: '#fa7a6b',
    textAlign: 'left',
  },
  dropdownIconStyle: {
    height: 15,
    width: 15,
  },
});

export default styles;

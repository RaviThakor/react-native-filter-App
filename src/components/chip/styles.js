import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    borderRadius: 10,
    paddingVertical: 6,
    paddingHorizontal: 15,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleStyle: {
    color: '#FFFFFF',
    fontSize: 13,
  },
  badgeStyle: {
    color: '#FFFFFF',
    borderColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 3,
    paddingHorizontal: 5,
    fontSize: 12,
    marginLeft: 5,
  },
});

export default styles;

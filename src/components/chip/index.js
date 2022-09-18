import React from 'react';
import {Pressable, Text} from 'react-native';

import styles from './styles';

const Chip = ({
  isSelected,
  customMainContainerStyle,
  title,
  badgeValue,
  onPress,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.mainContainer,
        customMainContainerStyle,
        {backgroundColor: isSelected ? '#fa7a6b' : '#fba69d'},
      ]}>
      <Text style={styles.titleStyle}>{title}</Text>
      <Text style={styles.badgeStyle}>{badgeValue}</Text>
    </Pressable>
  );
};

export default Chip;

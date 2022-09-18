import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';

import styles from './styles';
import share from '../../assets/images/share.png';

const Button = ({title, isShareButton, customStyle, onPress, disabled}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.7}
      style={[
        styles.mainContainer,
        {backgroundColor: disabled ? '#fc9c8d' : '#fa7a6b'},
        customStyle,
      ]}>
      {isShareButton && <Image style={styles.imageStyle} source={share} />}
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

import React from 'react';
import {Image, View, Text} from 'react-native';

import styles from './styles';
import play from '../../assets/images/play.png';
import Button from '../button';

const Card = ({title, description}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.playAndTitleContainer}>
        <Image style={styles.playImageStyle} source={play} />
        <View style={styles.titleDescriptionContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>
      <Button title="SHARE" isShareButton />
    </View>
  );
};

export default Card;

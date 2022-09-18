import React from 'react';
import {Image, Text, View} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';

import down_arrow from '../../assets/images/down_arrow.png';
import up_arrow from '../../assets/images/up_arrow.png';
import styles from './styles';

const Dropdown = React.forwardRef((props, ref) => {
  const {title, placeholder, customStyle, data, disabled, onSelect} = props;
  return (
    <View style={[styles.mainContainer, customStyle]}>
      <Text style={styles.title}>{title}</Text>
      <SelectDropdown
        ref={ref}
        data={data}
        onSelect={onSelect}
        defaultButtonText={placeholder}
        buttonStyle={styles.dropdownStyle}
        buttonTextStyle={styles.buttonTextStyle}
        renderDropdownIcon={isOpened => {
          return isOpened ? (
            <Image source={up_arrow} style={styles.dropdownIconStyle} />
          ) : (
            <Image source={down_arrow} style={styles.dropdownIconStyle} />
          );
        }}
        dropdownIconPosition={'right'}
        disabled={disabled}
      />
    </View>
  );
});

export default Dropdown;

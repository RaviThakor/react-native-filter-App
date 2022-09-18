import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import styles from './styles';
import {DashBoard} from '../screens';
import {DrawerContent} from '../components';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          drawerStyle: {
            width: '90%',
          },
        }}
        drawerContent={DrawerContent}>
        <Drawer.Screen
          options={styles.dashBoardHeaderStyle}
          name="TICTACLEARN"
          component={DashBoard}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigation;

import * as React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer'

import Main from './Main'
import Profile from './Profile'
import Store from './Store'
import DrawerNavigator from './DrawerNavigator';

const Drawer = createDrawerNavigator();

function DrawerMain() {
  return (
    <Drawer.Navigator
        drawerContent={DrawerNavigator}
    >
      <Drawer.Screen
        name="Main"
        component={Main}   
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}   
      />
      <Drawer.Screen
        name="Store"
        component={Store}   
      />

    </Drawer.Navigator>
  );
}

export default function SingUp() {
  return (
        <DrawerMain />
  );
}

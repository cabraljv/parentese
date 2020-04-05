import * as React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Main from './Main';
import Ranking from './Ranking';
import Notifications from './Notifications'
import Messages from './Messages';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'

const Tab = createMaterialBottomTabNavigator();

function TabFeed() {
  return (
    <Tab.Navigator
      initialRouteName="Main"
      activeColor="#2B2B2B"
      inactiveColor="#858585"
      barStyle={{backgroundColor:'#fff'}}
    >
      <Tab.Screen
        name="Main"
        component={Main}    
          options={{
          title:'Feed',
          tabBarIcon: ({ color }) => (
            <SimpleLineIcons name="home" color={color} size={22} />
          ),
        }}
      />
      <Tab.Screen
        name="Ranking"
        component={Ranking}   
        options={{
          title:'Ranking',
          tabBarIcon: ({ color }) => (
            <SimpleLineIcons name="trophy" color={color} size={22} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}   
        options={{
          title:'Notificações',
          tabBarIcon: ({ color }) => (
            <SimpleLineIcons name="bell" color={color} size={22} />
          ),
        }}
      />
      <Tab.Screen
        name="Messages"
        component={Messages}  
        options={{
          title:'Menssagens',
          tabBarIcon: ({ color }) => (
            <SimpleLineIcons name="envelope" color={color} size={22}  />
          ),
        }} 
      />

    </Tab.Navigator>
  );
}

export default function Feed() {
  return (
        <TabFeed />
  );
}

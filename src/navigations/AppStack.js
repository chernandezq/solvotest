import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import More from '../screens/More';
import Folders from '../screens/folders';
import Search from '../screens/search';
import {CountryStack} from './CountryStack';

const Tab = createBottomTabNavigator();

export const AppStack = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={CountryStack} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Folders" component={Folders} />
      <Tab.Screen name="More" component={More} />
    </Tab.Navigator>
  );
};

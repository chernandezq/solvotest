import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Countries from '../screens/countries/home';
import CountryDetailMain from '../screens/countries/detail';

const Stack = createStackNavigator();

export const CountryStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen
        name="Countries"
        component={Countries}
        options={{title: ''}}
      />
      <Stack.Screen
        name="CountryDetail"
        component={CountryDetailMain}
        options={{title: ''}}
      />
    </Stack.Navigator>
  );
};

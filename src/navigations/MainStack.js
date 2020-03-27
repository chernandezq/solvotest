import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from '../screens/splash';
import {AppStack} from './AppStack';

const Stack = createStackNavigator();

export const MainStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Main" component={Splash} options={{title: ''}} />
      <Stack.Screen name="App" component={AppStack} options={{title: ''}} />
    </Stack.Navigator>
  );
};

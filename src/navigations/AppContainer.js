import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MainStack} from './MainStack';

const AppContainer: () => React = () => {
  return (
    <NavigationContainer>
      <MainStack></MainStack>
    </NavigationContainer>
  );
};

export default AppContainer;

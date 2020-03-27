import React, {useState, useEffect} from 'react';
import {ImageBackground, View} from 'react-native';
import {CommonActions} from '@react-navigation/native';
import {styles} from './style';
import {AppStack} from '../../navigations/AppStack';

const Splash: () => React = props => {
  const [data, setData] = useState([]);
  const {navigation} = props;

  useEffect(() => {
    performTimeConsumingTask();
  }, []);

  const performTimeConsumingTask = async () => {
    new Promise(resolve =>
      setTimeout(() => {
        navigateTo();
      }, 3000),
    );

    setData(true);
  };

  const navigateTo = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{name: 'App'}],
      }),
    );
  };

  return (
    <View style={styles.container}>
      {data == true && (
        <ImageBackground
          style={styles.imageBackground}
          source={require('../../assets/img/splash.jpg')}
        />
      )}
    </View>
  );
};

export default Splash;

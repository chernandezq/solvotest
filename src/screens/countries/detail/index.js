import React from 'react';
import {View} from 'react-native';
import CountryDetail from './Detail';

const CountryDetailMain: () => React<Props> = props => {
  const {country} = props.route.params;

  return (
    <View style={{flex: 1}}>
      <CountryDetail country={country}></CountryDetail>
    </View>
  );
};

export default CountryDetailMain;

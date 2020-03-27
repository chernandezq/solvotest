import React from 'react';
import {styles} from './style';
import {SvgUri} from 'react-native-svg';
import * as strings from '../../../../../commons/strings';
import {View, TouchableOpacity, Text, Image} from 'react-native';

const CountryCard: React = ({onPress, item}) => {
  const {flag, name, region, capital} = item;

  return (
    <TouchableOpacity
      style={[styles.container, {width: '100%', marginVertical: 4 * 2}]}
      activeOpacity={0.5}
      onPress={onPress}>
      <View style={{flex: 1}}>
        <SvgUri width="100%" height="250" uri={flag} />
      </View>

      <View style={styles.body}>
        <View style={styles.row}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.capitalTitle}>{strings.CAPITAL}</Text>
        </View>

        <View style={styles.row}>
          <View style={styles.row}>
            <Text style={styles.region}>{`${strings.REGION}: ${region}`}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.capitalTitle}>{capital}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CountryCard;

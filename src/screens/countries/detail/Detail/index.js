import React, {useState} from 'react';
import {styles} from './style';
import MapCountry from '../Map';
import {View, Text} from 'react-native';
import {SvgUri} from 'react-native-svg';

const CountryDetail: React = ({country}) => {
  const [countryData, setCountryData] = useState(country);

  return (
    <View style={styles.container}>
      <View style={{flex: 1, marginTop: 10}}>
        <SvgUri width="100%" height="250" uri={countryData.flag} />
      </View>
      <View style={styles.body}>
        <View style={styles.row}>
          <Text style={styles.title}>{countryData.name}</Text>
        </View>

        <View style={styles.row}>
          <View style={styles.containerInfo}>
            <Text style={styles.subtitle}>Capital: </Text>
            <Text style={styles.titleData}>{countryData.capital}</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.containerInfo}>
            <Text style={styles.subtitle}>Region: </Text>
            <Text style={styles.titleData}>{countryData.region}</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.containerInfo}>
            <Text style={styles.subtitle}>Subregion: </Text>
            <Text style={styles.titleData}>{countryData.subregion}</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.containerInfo}>
            <Text style={styles.subtitle}>Population: </Text>
            <Text style={styles.titleData}>{countryData.population}</Text>
          </View>
        </View>

        <MapCountry
          latitude={countryData.latlng[0]}
          longitude={countryData.latlng[1]}></MapCountry>
      </View>
    </View>
  );
};

export default CountryDetail;

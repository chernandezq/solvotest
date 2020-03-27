import React, {useState, useEffect} from 'react';
import {ActivityIndicator, View, TextInput} from 'react-native';
import {styles} from './style';
import CountriesList from './components/List';
import {getListsCountries} from '../../../api';
import {SEARCH_PLACEHOLDER} from '../../../commons/strings';

const Countries: () => React = props => {
  const [countries, setCountries] = useState([]);
  const [loader, setLoader] = React.useState(false);
  const [searchResult, setSearchResult] = React.useState([]);

  useEffect(() => {
    getCountries();
  }, []);

  const getCountries = async () => {
    setLoader(true);
    try {
      const data = await getListsCountries();
      setCountries(data);
    } catch (err) {
    } finally {
      setLoader(false);
    }
  };

  const onChangeTextInputSearch = value => {
    searchCountry(value);
  };

  const searchCountry = value => {
    const filteredHotels = countries.filter(country => {
      return country.name.toLowerCase().includes(value);
    });

    setSearchResult(filteredHotels);
  };

  const navigateToCountryDetail = country => {
    const {navigation} = props;
    navigation.navigate('CountryDetail', {country});
  };

  return (
    <View style={styles.container}>
      {loader && <ActivityIndicator color={'red'} size="small" />}

      {!loader && (
        <View style={styles.searchSection}>
          <TextInput
            style={styles.input}
            placeholder={SEARCH_PLACEHOLDER}
            onChangeText={onChangeTextInputSearch}
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>
      )}

      <CountriesList
        data={searchResult.length > 0 ? searchResult : countries}
        onCardPress={navigateToCountryDetail}
      />
    </View>
  );
};

export default Countries;

import React from 'react';
import {FlatList, View} from 'react-native';

import {styles} from './style';
import CountryCard from '../Card';

const CountriesList: React = ({onCardPress, data}) => {
  const keyExtractor = data => data.name;

  const renderItem = ({item}) => {
    return <CountryCard item={item} onPress={() => onCardPress(item)} />;
  };

  return (
    <FlatList
      data={data}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.flatlist}
      keyboardShouldPersistTaps="handled"
      ListFooterComponent={() => <View style={{height: 80}} />}
    />
  );
};

export default CountriesList;

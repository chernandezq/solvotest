import React from 'react';
import MapView, {Marker} from 'react-native-maps';

const MapCountry: React = ({latitude, longitude}) => {
  const coordinate = {latitude: latitude, longitude: longitude};
  return (
    <MapView
      style={{
        marginTop: 10,
        width: '100%',
        height: 250,
      }}
      initialRegion={{
        latitude: latitude,
        longitude: longitude,
        latitudeDelta: 13,
        longitudeDelta: 13,
      }}>
      <Marker coordinate={coordinate} />
    </MapView>
  );
};

export default MapCountry;

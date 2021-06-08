import React from 'react';
import {View, Image} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

const HomeMap = props => {
  return (
    <View
      style={{
        height: 300,
        backgroundColor: '#ffb3b3',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <MapView
        style={{height: '100%', width: '100%'}}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 41.376625,
          longitude: 33.776497,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <Marker coordinate={{latitude: 41.376625, longitude: 33.776497}}>
          <Image
            style={{width: 40, height: 40, resizeMode: 'contain'}}
            source={require('../../assets/images/top-UberX.png')}
          />
        </Marker>
      </MapView>
    </View>
  );
};

export default HomeMap;

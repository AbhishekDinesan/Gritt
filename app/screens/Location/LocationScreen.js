import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import { Marker, Callout } from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

export class LocationScreen extends Component {
  render() {
    return (
      <View style = {{marginTop: 50, flex: 1}}>

  <GooglePlacesAutocomplete
      placeholder='Search'
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      query={{
        key: '',
        language: 'en',
        types: 'gym',
      }}
      styles = {{
      container: { flex: 0, position: "absolute", width: "100%", zIndex: 1 },
      listView: { backgroundColor: "white"}
    }}




    />
       
       
        <MapView style={styles.map}
        initialRegion={{
          latitude: 43.4723, 
          longitude: -80.5373, 
          latitudeDelta: 0.122,
          longitudeDelta: 0.121,
        }}
        >
        
        <Marker 
          coordinate = {{
            latitude: 43.480230, 
            longitude: -80.521060,
          }}
          pinColor = "red"
        >
          <Callout>
          <Text>GoodLife</Text>
        </Callout>
          </Marker>


          <Marker 
          coordinate = {{
            latitude: 43.4680, 
            longitude: -80.5373,
          }}
          pinColor = "black"
        >
          <Callout>
          <Text>University Gym</Text>
        </Callout>
          </Marker>


          <Marker 
          coordinate = {{
            latitude: 43.4738, 
            longitude: -80.5275,
          }}
          pinColor = "black"
        >
          <Callout>
          <Text>University Gym</Text>
        </Callout>
          </Marker>




        </MapView>

        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});

export default LocationScreen
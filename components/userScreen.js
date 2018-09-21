import React, { Component } from 'react';
import { Button, Text, View, StyleSheet, ScrollView } from 'react-native';
import { Location, Permissions, MapView } from 'expo';
import { connect } from 'react-redux';
import Geolocation from 'react-native-geolocation-service';
import Yelp from './yelp'
import Data from '../data/yelp'

class UserScreen extends Component {
  state = {
      markers: [],
      region: null,
    coffeeShops: [],
    businesses:[]
    
  }
//expressopedia functions
componentWillMount() {
  this.getLocationAsync();
}

componentDidMount() {

  console.log(data.businesses);
  this.setState({
      businesses: data.businesses
  })}

getCoffeeShops = async () => {
  const { latitude, longitude } = this.state.region;
  const userLocation = { latitude, longitude };
  const coffeeShops = await YelpService.getCoffeeShops(userLocation);
  this.setState({ coffeeShops });
};


getLocationAsync = async () => {
  let { status } = await Permissions.askAsync(Permissions.LOCATION);
  if (status !== 'granted') {
    this.setState({
      errorMessage: 'Permission to access location was denied'
    });
    await this.getCoffeeShops();
  }
  console.log(Location);

  let location = await Location.getCurrentPositionAsync({});

  const region = {
    latitude: location.coords.latitude,
    longitude: location.coords.longitude,
    ...deltas
  };
  await this.setState({ region });
}

// function for on drag
_handleLongPress = e => {
  const marker = {
   coordinates: {
    longitude: e.nativeEvent.coordinate.longitude,
    latitude: e.nativeEvent.coordinate.latitude,
   },
  };

  console.log('Event: ', marker);

  this.setState({
   markers: [...this.state.markers, marker],
  });
 };



  // componentDidMount() {
  //   this.fetchCoords ();
  // }

  fetchCoords = () => {
    console.log('does this run')
    
      console.log('inside the if..')
      Geolocation.getCurrentPosition(
          (position) => {
              console.log(position);
          },
          (error) => {
              // See error code charts below.
              console.log(error.code, error.message);
          },
          { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
      );
 

  }


  render() {
    return (
      <View style={styles.container}>
      {/* <MapView
        style={styles.map}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
        //add marker when user presses and hold map
        onLongPress={e => this._handleLongPress(e)}>
        {this.state.markers.map((mark, i) => (
          <MapView.Marker
            key={i}
            ref={this.setMarkerRef}
            draggable
            coordinate={mark.coordinates}
          />
        ))}
      </MapView> */}

    {/* //attempt to map markers */}
      {/* <View>{this.state.businesses.map((x, index) => {
        return (
          <MapView.Marker
            key={index}
            ref={this.setMarkerRef}
            draggable
            coordinate={x.coordinates} 
          />)
          </View> */}
      
      <View>{this.stat.businesses.map((x, index) => {
        return (
          <View key= {index}>
          <Text>{x.name}</Text>
          <Text>{x.location.display_address}</Text>
          <Text>Distance: {Math.floor(x.distance)}m</Text>
          
          </View>
          
        )
      })}</View>
    </View>
      
    );
  }



}


export default UserScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  textInput: {
    backgroundColor: 'white',
    height: 30,
    width: 200,
    borderRadius: 5,
    borderColor: 'blue',
    borderWidth: 1,
    marginBottom: 10
  },

});




import React, { Component } from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import { MapView } from 'expo';
import { connect } from 'react-redux';
import Geolocation from 'react-native-geolocation-service';

class UserScreen extends Component {
  state = {
      markers: [],
    
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



  componentDidMount() {
    this.fetchCoords ();
  }

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
      <MapView
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
      </MapView>
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




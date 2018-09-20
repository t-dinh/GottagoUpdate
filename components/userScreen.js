import React, { Component } from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import { MapView } from 'expo';
import { connect } from 'react-redux';

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

const mapDispatchToProps = dispatch => ({

})

export default connect(null, mapDispatchToProps)(UserScreen);

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
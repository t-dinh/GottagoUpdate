import React, { Component } from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import { MapView } from 'expo';
import { connect } from 'react-redux';
import Geolocation from 'react-native-geolocation-service';

class UserScreen extends Component {
  state = {
    latitude: 33.703677,
    longitude: -117.846610,    
    postion: {}
  }


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
      // <View style={styles.container}>
      <MapView
        style={{ flex: 1 }}
        // provider="google"
        showsUserLocation={true}
        followUserLocation={true}
        initialRegion={{
          latitude: 33.703677,
          longitude: -117.846610,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
        scrollEnables={true}
      >
        <MapView.Marker
          draggable
          onDragEnd={(e) => {console.log('dragEnd', e.nativeEvent.coordinate)}}
          coordinate={this.state}
          title={"Some Title"}
          description={"Hello world"}
        />
      </MapView>
      // <Text>This is the User Screen!</Text>


      // </View>
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




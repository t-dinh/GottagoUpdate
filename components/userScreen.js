import React, { Component } from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import { MapView } from 'expo';
import { connect } from 'react-redux';

class UserScreen extends Component {
  state = {
    latitude: 33.703677,
    longitude: -117.846610,
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
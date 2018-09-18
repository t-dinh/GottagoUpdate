import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MapView } from "expo";
// Default Google Map Call

let { navigationButton, container, title, userBox } = styles;

export default class App extends React.Component {

  
  
  render() {
    return (
      <MapView
        style={container}
        initialRegion={{
          latitude: 33.71,
          longitude: -117.85,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
      />
    );
  }
}


const styles = StyleSheet.create({
  container: {
    display: flex,
    borderColor: 'orange',
    borderWidth: 1,
    backgroundColor: 'skyblue'
  },
  title: {
    fontSize: 50,
    marginTop: 40,
    marginBottom: 20
  }

  })
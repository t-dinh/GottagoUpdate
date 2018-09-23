import React, { Component } from 'react';
import { Button, Text, View, StyleSheet, ScrollView, FlatList, ListView } from 'react-native';
import { Location, Permissions, MapView } from 'expo';
import { connect } from 'react-redux';
import Geolocation from 'react-native-geolocation-service';
import Yelp from './yelp'
import Data from '../data/yelp'

class UserScreen extends Component {
  state = {
    markers: [],
    region: {
      latitude: 33.703927,
      longitude: -117.846567,
    },
    coffeeShops: [],
    businesses: []

  }
  //expressopedia functions
  componentWillMount() {
    this.getLocationAsync();
  }

  componentDidMount() {

    console.log("buinesses", Data.businesses);
    this.setState({
      businesses: Data.businesses
    })
  }

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
    };
    this.setState({ region });
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

  // <View style={styles.container}>

  render() {
    return (
      <View>
        <MapView
          style={{
            height: 400
          }}
          region={{
            ...this.state.region,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
          //add marker when user presses and hold map
          onLongPress={e => this._handleLongPress(e)}
        >
          <MapView.Marker

            pinColor='gold'
            coordinate={{
              latitude: this.state.region.latitude,
              longitude: this.state.region.longitude
            }}
            title="You are Here"

          />
          {
            this.state.businesses.map((x, index) => {
              console.log("COORDINATES:", x.coordinates.latitude, x.coordinates.longitude)
              return (
                <MapView.Marker
                  key={index}
                  // ref={this.setMarkerRef}
                  draggable
                  coordinate={x.coordinates}
                  title={x.name}
                  description={x.location.address1}
                  description2={x.location.address2}
                />)
            })
          }
        </MapView>
        <ScrollView style={{height: 160}}>
        {/* <FlatList
          data={this.state.businesses}
          style={styles.list}
          renderItem={({ item }) => 
          <View>
          <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{item.name}</Text>
          <Text style={{ fontSize: 15 }}>{item.location.address1} {item.location.address2}</Text>
                  <Text style={{ fontSize: 15 }}>{item.location.city} {item.location.zip_code}</Text>
                  <Text style={{ fontSize: 15, borderBottomColor: 'white' }}>Distance: {Math.floor(item.distance)}m</Text>
                  </View>
        }
          keyExtractor={(item, i) => i + ''}
        /> */}
          {
            this.state.businesses.map((n, i) => {
              console.log(Math.floor(n.distance))
              return (

                <View key={i} style={styles.list}>
                  <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{n.name}</Text>
                  <Text style={{ fontSize: 15 }}>{n.location.address1} {n.location.address2}</Text>
                  <Text style={{ fontSize: 15 }}>{n.location.city} {n.location.zip_code}</Text>
                  <Text style={{ fontSize: 15 }}>Distance: {Math.floor(n.distance)}m</Text>

                </View>

              )
            })
          }
        </ScrollView>
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
  list: {
    height: 100,
    backgroundColor: 'powderblue',
    opacity: .5,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 5
  }

});




import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { MapView } from 'expo';
import { connect } from 'react-redux';
import InputForm from './inputForm';


class InputScreen extends React.Component {
  state = {
    latitude: 33.703677,
    longitude: -117.846610,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
    userRating: []
  }
  static navigationOptions = {
    title: 'Submit a Restroom'
};

  submitUser = data => {
    console.log('button click');
    console.log(this.state);
    this.props.addInput({
      latitude: this.state.latitude,
      longitude: this.state.longitude,
      // userRating: data
    })
    this.props.navigation.navigate('view', {
      redirect: true,
      latitude: this.state.latitude,
      longitude: this.state.longitude
    })


  }

  locate = (coords) => {
    console.log('locate click')
    let latitude = coords.nativeEvent.coordinate.latitude;
    let longitude = coords.nativeEvent.coordinate.longitude;
    this.setState({
      latitude: latitude,
      longitude: longitude,
    },
      () => { console.log(this.state.latitude, this.state.longitude) },

    )
  }

  render() {
    return (
      <ScrollView style={{height: 100}}>
      <View style={{justifyContent:'center', alignItems:'center', backgroundColor:'#eeeeff'}}>
        <MapView
          style={{height:280, width:360, marginBottom:5}}
          initialRegion={this.state}
          onPress={this.locate}
        >
          <MapView.Marker
            draggable
            onDragEnd={(e) => { console.log('dragEnd', e.nativeEvent.coordinate) }}
            coordinate={{ latitude: this.state.latitude, longitude: this.state.longitude }}
            title="Your Selection"
            description=""
            pinColor='#6495ed'
          />
        </MapView>
        <InputForm submitUser={this.submitUser} position={this.state.position} />
      </View>
      </ScrollView>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addInput: input => dispatch({ type: 'INPUT_DATA', newInput: input })
})

export default connect(null, mapDispatchToProps)(InputScreen);


import React from 'react';
import { StyleSheet, Text, View, Platform, TextInput, TouchableOpacity } from 'react-native';
import { MapView } from 'expo';
import Button from './button';
import StarRating from './starRating';
import { connect } from 'react-redux';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';

class InputScreen extends React.Component {
  state = {
    // ratings: "",
    business: "",
    address: "",

    // hours: "",
    // clean: "",

    valueOne: 'public',      // is public 0  or private 1
    valueTwo: 'free',      // is free 0 or paid 1
    valueThree: 'clean',    // is clean 0 or not 1
    valueFour: 'accessible',     // is safe 0 or not 1
    radioPropsOne: [
      { label: 'Public', value: 'public' },
      { label: 'Private', value: 'private' }
    ],
    radioPropsTwo: [
      { label: 'Free', value: 'free' },
      { label: 'Paid', value: 'paid' }
    ],
    radioPropsThree: [
      { label: 'Clean', value: 'clean' },
      { label: 'Dirty', value: 'dirty' }
    ],
    radioPropsFour: [
      { label: 'Accessible', value: 'accessible',  },
      { label: 'Not Accessible', value: 'not-accessible' }
    ],

    latitude: 33.703677,
    longitude: -117.846610,  

    
    
  }

  submitUser = () => {
    console.log('button click')
    let { business, address, valueOne, valueTwo, valueThree, valueFour } = this.state;

    this.props.addInput({ business, address, valueOne, valueTwo, valueThree, valueFour });
    console.log(this.state)
    this.setState({
      business: '',
      address: '',
      valueOne: '',
      valueThree: '',
      valueFour: ''
    })
  }

  locate= (coords) => {
    console.log('locate click')
    let latitude = coords.nativeEvent.coordinate.latitude;
    let longitude = coords.nativeEvent.coordinate.longitude;
    this.setState({
      latitude:latitude,
      longitude:longitude,
    },
     () => { console.log(this.state.latitude, this.state.longitude) },
     
    )
  }


  render() {
    let { ratings, business, address, hours, radioPropsOne, radioPropsTwo, radioPropsThree, radioPropsFour, valueOne, valueTwo, valueThree, valueFour } = this.state
    let { textInput, addRestroomButton, radio, radioButton } = styles;
    return (
      <View style={styles.container}>
        <MapView
          style={{ height: 350, width: 300 }}
          // provider="google"
          initialRegion={{
            latitude: 33.703677,
            longitude: -117.846610,  
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
          onPress={this.locate}
        />
        

        <Text>Add restroom page</Text>

        <Text>Overall Rating</Text>
        <StarRating
        />

        <TextInput
          placeholder='Business'
          textAlign='left'
          onChangeText={business => { this.setState({ business }) }}
          value={business}
          style={textInput}
        />
        <TextInput
          placeholder='Address'
          textAlign='left'
          onChangeText={address => { this.setState({ address }) }}
          value={address}
          style={textInput}
        />
        <Text>Cleanliness Rating</Text>
        <StarRating
        />
        <View style={radio}>
          <RadioForm
            radio_props={radioPropsOne}
            initial={0}
            buttonColor={'#2196f3'}
            onPress={(valueOne) => { this.setState({ valueOne }) }}
            style={radioButton}
          />
          <RadioForm
            radio_props={radioPropsTwo}
            initial={0}
            buttonColor={'#2196f3'}
            onPress={(valueTwo) => { this.setState({ valueTwo }) }}
            style={radioButton}
          />
          <RadioForm
            radio_props={radioPropsThree}
            initial={0}
            buttonColor={'#2196f3'}
            onPress={(valueThree) => { this.setState({ valueThree }) }}
            style={radioButton}
          />
          <RadioForm
            radio_props={radioPropsFour}
            initial={0}
            buttonColor={'#2196f3'}
            onPress={(valueFour) => { this.setState({ valueFour }) }}
            style={radioButton}
          />
        </View>
        <Button
          onPress={this.submitUser}
          style={addRestroomButton}
          text='Submit'
          textStyle={{ color: 'white', fontWeight: 'bold', fontSize: 15 }}
        />
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addInput: input => dispatch({ type: 'INPUT_DATA', newInput: input })
})

export default connect(null, mapDispatchToProps)(InputScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
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
  addRestroomButton: {
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center',
    height: 35,
    width: 120,
    borderRadius: 5,
  },
  radio: {
    flexDirection: 'row',
    justifyContent: 'center',

  },
  radioButton: {
    margin: 5,
    padding: 5,
  }
});

import React from 'react';
import { StyleSheet, Text, View, Platform, TextInput } from 'react-native';
import { MapView } from 'expo';
import Button from './button';
import StarRating from './starRating';
// import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';

export default class InputScreen extends React.Component {
  state = {
    ratings: "",
    business: "",
    address: "",

    hours: "",
    clean: "",

    valueOne: 0,      // is public 0  or private 1
    // valueTwo: 0,      // is free 0 or paid 1
    // valueThree: 0,    // is accessible 0 or not 1
    // valueFour: 0,     // is safe 0 or not 1
    radioPropsOne: [
      { label: 'Public', value: 0 },
      { label: 'Private', value: 1 }
    ],
    radioPropsTwo: [
      { label: 'Free', value: 0 },
      { label: 'Paid', value: 1 }
    ],
    radioPropsThree: [
      { label: 'Clean', value: 0 },
      { label: 'Dirty', value: 1 }
    ],
    radioPropsFour: [
      { label: 'Accessible', value: 0 },
      { label: 'Not Accessible', value: 1 }
    ],

    
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
            latitude: 40.76727216,
            longitude: -73.99392888,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
        />
         <Text>Add restroom page</Text>         
         
         <Text>Overall Rating</Text>
         <StarRating
         />
        <Button
          style={addRestroomButton}
          text='Submit'
          textStyle={{ color: 'white', fontWeight: 'bold', fontSize: 15 }}
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
      </View>
    );
  }
}

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
  addRestroomButton: {
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center',
    height: 35,
    width: 120,
    borderRadius: 5,
  },
  radio:{
    flexDirection: 'row',
    justifyContent: 'center',
     
  },
  radioButton: {
    margin: 5,
    padding: 5,
  }
});

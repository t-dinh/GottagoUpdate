import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ImageBackground } from 'react-native';

export default class App extends React.Component {
  state = {
    search: ''
  }
  render() {
    const resizeMode = 'stretch'
    return (
      
      <View style={styles.container}>
      <ImageBackground 
        style={{
            flex: 1,
            resizeMode,
          }}
          source={require('./toiletpaper.jpg')}>
      <TextInput
        textAlign='center'
        onChangeText={search => { this.setState({ search }) }}
        value={this.state.search}
        style={styles.textInput}
        placeholder="Search by Location"
        />
        <Image source={require('./gottago2.png')} />
        
        <TouchableOpacity>
          <Text>Find a restroom</Text>
        </TouchableOpacity>
  </ImageBackground>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'salmon',
    alignItems: 'center',
    justifyContent: 'center',

  },
  textInput: {
    
    height: 40,
    width: 300,
    borderRadius: 10,
    borderColor: 'powderblue',
    borderWidth: 1,
    marginBottom: 10
  }
});

import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ImageBackground } from 'react-native';


class Mainpage extends Component {
    render() {
        const resizeMode = 'stretch'
        return (
            <ImageBackground
                style={{
                    flex: 1,
                    resizeMode,
                }}
                source={require('./toiletpaper.jpg')}>
                <View style={styles.container}>
                    <TextInput
                        textAlign='center'
                        onChangeText={search => { this.setState({ search }) }}
                        value={this.state.search}
                        style={styles.textInput}
                        placeholder="Search by Location"
                    />
                    <Image source={require('./gottablue.png')} />

                    <TouchableOpacity>
                        <Text>Find a restroom</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>


        );
    }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  },
  logo: {
    width: 100,
    flex: 1,
    resizeMode: 'contain'
  }
});

 
export default Mainpage;
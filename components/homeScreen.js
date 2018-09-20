import React, { Component } from 'react';

import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ImageBackground, Button } from 'react-native';
import { getLocation } from './actions';


import { connect } from 'react-redux';

class HomeScreen extends Component {

    state = {
        zip: ''
    }

    static navigationOptions = {
        header: null
    };

    searchLoc = e => {
        this.props.navigation.navigate('input');
        this.props.getZip(this.state.zip);
        this.setState({
            zip: e.target.value
        })
        console.log(this.state.zip);
    }

    render() {

        return (

            <ImageBackground
                imageStyle={{
                    resizeMode: "stretch",
                }}
                style={{
                    flex: 1,
                    justifyContent: "space-evenly",
                    alignItems: 'center',
                    
                }}
                source={require('../assets/toiletpaper.jpg')}>
                <Button
                        title="Go to User Input Page"
                        onPress={() => this.props.navigation.navigate('input')}
                    />
                    <View style={{alignItems:'flex-start'}}>
                <TextInput
                    placeholderTextColor="black"
                    underlineColorAndroid='rgba(0,0,0,0)'
                    textAlign='center'
                    onChangeText={zip => { this.setState({ zip }) }}
                    value={this.state.zip}
                    style={styles.textInput}
                    placeholder="Search by Location"
                />
                <TouchableOpacity >
                    <Text style={{fontSize: 20}} onPress={this.searchLoc}>Go</Text>
                </TouchableOpacity>
                </View>

                <Image style={styles.logo} source={require('../assets/gottablue.png')} />

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.props.navigation.navigate('user')}
                >
                    <Text >Find the Nearest Restroom</Text>
                </TouchableOpacity>

            </ImageBackground>


        );
    }
}

const mapDispatchToProps = dispatch => ({
    // import 'getLocation' from actions
    getZip: zip => dispatch(getLocation(zip))
})

export default connect(null, mapDispatchToProps)(HomeScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'center',

    },
    textInput: {
        backgroundColor: "white",
        opacity: 0.5,
        color: 'black',
        fontWeight: 'bold',
        justifyContent: 'flex-start',
        height: 40,
        width: 200,
        borderRadius: 10,
        borderColor: 'powderblue',
        borderWidth: 1,
        // marginBottom: 10
    },
    logo: {
        width: 400,
        height: 160,
        // marginBottom: 0,
        resizeMode: 'contain'
    },
    button: {
        // borderColor: 'yelloworange',
        // flexDirection: 'column',
        borderColor: 'powderblue',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height:100,
        width: 100,
        borderRadius: 10,
    },
});





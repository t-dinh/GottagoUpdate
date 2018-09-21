import React, { Component } from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ImageBackground, Button } from 'react-native';
import { getLocation } from './actions';
import { connect } from 'react-redux';

import data from '../data/yelp'

// const config = {
//     header: {
//         Authorization: 'Bearer SPlOW5mPO6FHbiwobWsp5xnPlohewSzdV9LNLTZ6xOXhBix3tbexOCaoMb2pTpLlNa4127b6Kj1hfyHqM3iu0KK6fuLEad4mDsCUhfMTxEPyEr55UGkK75FpQ8KhW3Yx',
//         origin: 'localhost',
//         xrequestedwith: 'react-native'
//     },
//     params: {
//         term: 'tacos',
//         location: '92840'
//     }
// }

class HomeScreen extends Component {
    state = {
        zip: '',
    }
    static navigationOptions = {
        header: null
    };




    // componentDidMount() {

    //     console.log(data.businesses);
    //     this.setState({
    //         businesses: data.businesses
    //     })
        // axios.get('https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search', config)
        //         .then(res => {
        //             console.log(res.data)
        //         })
        //         .catch(err => {
        //             console.log(err.response)
        //         })
    // }

    getBusinesses = zip => {
        axios.get(`https://api.yelp.com/v3/businesses/search?location=${this.state.zip}`, config)
            .then(res => {
                console.log(res.data)

            })
    }

    render() {

        return (

            // <ImageBackground
            //     imageStyle={{
            //         resizeMode: "cover",
            //     }}
            //     style={{
            //         flex: 1,
            //         height: 270,
            //         width: 400,
            //         justifyContent: "space-evenly",
            //         alignItems: 'center',

            //     }}
            //     source={require('../assets/toiletpaper.jpg')}>
            <View style={{
                flex: 1,
                justifyContent: "space-evenly",
                alignItems: 'center'
            }}>
                <View style={{ alignItems: 'center' }}>
                <Image style={styles.logo} source={require('../assets/gottablue.png')} />
                <Text>Find Restrooms on the Go!</Text>
                <TouchableOpacity
                        style={styles.button}
                        onPress={() => this.props.navigation.navigate('user')}
                    >
                        <Text >Quick Find</Text>
                    </TouchableOpacity>
                    <TextInput
                        placeholderTextColor="black"
                        underlineColorAndroid='rgba(0,0,0,0)'
                        textAlign='center'
                        onChangeText={zip => { this.setState({ zip }) }}
                        value={this.state.zip}
                        style={styles.textInput}
                        placeholder="Search by Zipcode"
                    />
                    <TouchableOpacity >
                        <Text style={{ fontSize: 20 }} onPress={this.getBusinesses}>Go</Text>
                    </TouchableOpacity>
                </View>


                <View>

                    
                    <Button
                        title="Go to User Input Page"
                        onPress={() => this.props.navigation.navigate('input')}
                    />
                </View>
            </View>
            // </ImageBackground>


        );
    }
}
// const mapStateToProps = state => {
//     return { zip: state.zip}
// };

// const mapDispatchToProps = dispatch => ({
//     // import 'getLocation' from actions
//     getZip: zip => dispatch(getLocation(zip))
// })

export default HomeScreen;

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
        height: 190,
        width: 400,
        resizeMode: 'contain'
    },
    button: {
        backgroundColor: 'powderblue',
        // flexDirection: 'column',
        borderColor: 'powderblue',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        width: 200,
        borderRadius: 10,
    },
});





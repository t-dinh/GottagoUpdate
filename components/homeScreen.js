import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { getLocation } from './actions';


class HomeScreen extends Component {
    state = {
        zip: ''
    }
    static navigationOptions = {
        header: null
    };

    getZip = () => {
        this.props.navigation.navigate('search')
        this.setState({
            zip: e.target.value
        })
        console.log(this.state.zip)
    }

    render() {
        return (
            <ImageBackground
                imageStyle={{
                    resizeMode: "stretch",
                }}
                style={{
                    flex: 1,
                    height: 700,
                    width: 400,
                    justifyContent: "space-evenly",
                    alignItems: 'center'
                }}
                source={require('../assets/toiletpaper.jpg')}>
                <View style={{
                    justifyContent: "space-evenly",
                    alignItems: 'center'
                }}>
                    <View style={{ alignItems: 'center', justifyContent: "space-evenly" }}>
                    <Image style={styles.logo} source={require('../assets/gottablue.png')} />
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => this.props.navigation.navigate('user')}>
                        <Text >Quick Find</Text>
                    </TouchableOpacity>
                    {/* <Text>Or</Text>
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
                        <Text style={{ fontSize: 20 }} onPress={this.getZip}>Go</Text>
                    </TouchableOpacity> */}
                     </View>
                    <View style={{justifyContent: "space-around",
                    alignItems: 'center'}}>
                    <TouchableOpacity
                        style={styles.button}
                        title="Enter a Restroom"
                        onPress={() => this.props.navigation.navigate('input')}>  
                        <Text>Submit a Restroom</Text>
                    </TouchableOpacity>
                    </View>
                    <Image source={require('../assets/git.png')}/>
                    
                </View>
            </ImageBackground>


        );
    }
}
// const mapStateToProps = state => {
//     return { zip: state.zip }
// };

// const mapDispatchToProps = dispatch => ({
//     // import 'getLocation' from actions
//     grabZip: zip => dispatch(getLocation(zip))
// })

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

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
        opacity: 0.5,
        borderColor: 'powderblue',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        width: 130,
        borderRadius: 10,
    },
});





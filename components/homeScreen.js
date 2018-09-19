import React, { Component } from 'react';

import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ImageBackground, Button } from 'react-native';


import { connect } from 'react-redux';

class HomeScreen extends Component {

    state = {
        search: ''
    }

    static navigationOptions = {
        title: 'Home'
    };



    render() {
        const resizeMode = 'contain'
        return (
            
                <ImageBackground
                    style={{
                        flex:1,
                        resizeMode,
                    }}
                    source={require('../assets/toiletpaper.jpg')}>
                    <Button
                        title="Go to User Input Page"
                        onPress={() => this.props.navigation.navigate('input')}
                    />
                <View style={styles.container}>
                    <TextInput
                        textAlign='center'
                        onChangeText={search => { this.setState({ search }) }}
                        value={this.state.search}
                        style={styles.textInput}
                        placeholder="Search by Location"
                    />
                    <TouchableOpacity >
                    <Text >Find a Restroom</Text>
                    </TouchableOpacity>
                    <Image style={styles.logo} source={require('../assets/gottablue.png')} />
                    
                    <TouchableOpacity  
                        
                        onPress={() => this.props.navigation.navigate('user')}
                        >
                        <Text>find</Text>
                    </TouchableOpacity>
                    </View>
                </ImageBackground>

            
        );
    }

}

const mapDispatchToProps = dispatch => ({

})

export default connect(null, mapDispatchToProps)(HomeScreen);

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        // justifyContent: 'center',

    },
    textInput: {
        justifyContent: 'flex-start',
        
        height: 40,
        width: 300,
        borderRadius: 10,
        borderColor: 'powderblue',
        borderWidth: 1,
        marginBottom: 10
    },
    logo: {
        width: 300,
        margin: 0 ,
        resizeMode: 'contain'
    },
    button: {
        backgroundColor: 'powderblue',
        alignItems: 'center',
        justifyContent: 'center',
        height: 35,
        width: 300,
        borderRadius: 10,
      },
});





import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';



 class StarRating extends Component {
	render() {
		return (
			<View style={ styles.container }>
            <Image
                style={styles.image}
                source={require('../assets/selected_star.png')}
            />
            <Image
                style={styles.image}
                source={require('../assets/selected_star.png')}
            />
            <Image
                style={styles.image}
                source={require('../assets/selected_star.png')}
            />
            <Image
                style={styles.image}
                source={require('../assets/selected_star.png')}
            />
            <Image
                style={styles.image}
                source={require('../assets/selected_star.png')}
            />    
			</View>
		);
	}
}




export default StarRating;

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 25,
    flexDirection: 'row',
    backgroundColor: 'blue'
  },
  image: {
    width: 25,
    height: 25
  }
});
import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View
} from 'react-native'

import CardLink from './CardLink'

const mainStyles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    height: '100%'
  },
  imageContainer: {
    width: '100%',
    height: '100%',
  },
  innerContainer: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-around'
  }
});

class HomeScreen extends Component {
  navToOrder() {

  }

  navToCheckout() {

  }

  navToHelp() {
    
  }

  render() {
    return (
      <View style={mainStyles.viewContainer}>
        <Image source={require('../../res/home_bg.jpg')} style={mainStyles.imageContainer}>
          <View style={mainStyles.innerContainer}>
            <CardLink onPress={this.navToOrder} text="Order" />
            <CardLink onpress={this.navToCheckout} text="Checkout" />
            <CardLink onPress={this.navToHelp} text="Request Wait Staff" />
          </View>
        </Image>
      </View>
    )
  }
}

export default HomeScreen;

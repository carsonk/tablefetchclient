import React, { Component } from 'react';
import {
  StyleSheet,
  Button,
  Image,
  Text,
  View
} from 'react-native'

import CardLink from '../components/CardLink'

class HomeScreen extends Component {
  render() {
    return (
      <View style={mainStyles.viewContainer}>
        <Image source={require('../../res/home_bg.jpg')} style={mainStyles.imageContainer}>
          <View style={mainStyles.innerContainer}>
            <CardLink
              onPress={() => this.props.navigation.navigate('Order', {})}
              text="Order" />
            <CardLink
              onPress={() => this.props.navigation.navigate('Checkout', {})}
              text="Checkout" />
            <CardLink
              onPress={() => this.props.navigation.navigate('Help', {})}
              text="Request Wait Staff" />
          </View>
        </Image>
      </View>
    )
  }
}

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

export default HomeScreen;

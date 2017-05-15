import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Image, Text, View } from 'react-native'
import { connect } from 'react-redux'
import { StyleSheet } from 'react-native';

import CardLink from '../components/CardLink'

const styles = StyleSheet.create({
  container: {
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

class MainMenuPage extends Component {
  render() {
    return (
      <Image source={require('../../res/home_bg.jpg')} style={styles.container}>
        <View style={styles.innerContainer}>
          <CardLink to="/order" text="Order" />
          <CardLink to="/checkout" text="Checkout" />
          <CardLink to="/help" text="Request Wait Staff" />
        </View>
      </Image>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({

});

export default connect(mapStateToProps, {

})(MainMenuPage)

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'
import { StyleSheet } from 'react-native';

import CardLink from '../components/CardLink'

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    backgroundColor: 'steelblue',
    alignContent: 'space-around'
  },
  homeLink: {
    width: '40%',
    height: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  homeLinkText: {
    fontSize: 20
  }
});

class MainMenuPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <CardLink to="/order" text="ORDER" />
        <CardLink to="/checkout" text="CHECKOUT" />
        <CardLink to="/help" text="REQUEST WAIT STAFF" />
      </View>
    )
  }
}




const mapStateToProps = (state, ownProps) => ({

});

export default connect(mapStateToProps, {

})(MainMenuPage)

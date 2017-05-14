import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import { connect } from 'react-redux'

class OrderPage extends Component {
  render() {
    return (
      <View style={styles.container}>
      </View>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({

});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    backgroundColor: 'steelblue',
    alignContent: 'space-around'
  }
});

export default connect(mapStateToProps, {

})(OrderPage)

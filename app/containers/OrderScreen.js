import React, { Component } from 'react'
import {
  Text,
  View,
  Stylesheet
} from 'react-native'
import { connect } from 'react-redux'

import { fetchMenuIfNeeded } from '../actions'

class OrderScreen extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchMenuIfNeeded())
  }

  render() {
    return (
      <View>
        <Text>Order screen</Text>
      </View>
    )
  }
}

function mapStateToProps(state) {
  const { menu } = state
  const { categories, items, fetchingMenu, lastUpdated, error } = menu
  return { categories, items, fetchingMenu, lastUpdated, error }
}

export default connect(mapStateToProps)(OrderScreen)

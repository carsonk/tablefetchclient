import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Alert, Button, Text, View } from 'react-native'
import { connect } from 'react-redux'
import { memoryHistory } from 'react-router'
import { resetErrorMessage } from '../actions'

class App extends Component {
  static propTypes = {
    // Injected by React Redux
    errorMessage: PropTypes.string,
    resetErrorMessage: PropTypes.func.isRequired,
    // Injected by React Router
    children: PropTypes.node
  }

  handleDismissClick = e => {
    this.props.resetErrorMessage();
    e.preventDefault();
  }

  handleChange = nextValue => {
    memoryHistory.push(`/${nextValue}`);
  }

  renderErrorMessage() {
    const { errorMessage } = this.props;
    if (!errorMessage) {
      return null;
    }

    return (
      <Text>{errorMessage}</Text>
    )
  }

  render() {
    const { children, inputValue } = this.props;
    return (
      <View style={{backgroundColor: 'red'}}>
        {this.renderErrorMessage()}
        {children}
      </View>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  errorMessage: state.errorMessage
})

export default connect(mapStateToProps, {
  resetErrorMessage
})(App)

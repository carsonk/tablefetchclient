import React, { Component } from "react";
import { ScrollView, Text, View, StyleSheet } from "react-native";
import { Button } from "react-native-elements"
import { connect } from "react-redux";

import CartOrderItem from "../components/MenuItemCard";
import OrderedItemsList from "./OrderedItemsList"

import { submitOrder } from "../actions"

class CheckoutScreen extends Component {
  constructor(props) {
    super(props);

    this.onCheckout = this.onCheckout.bind(this);
  }

  onCheckout() {
    this.props.dispatch(submitOrder())
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Checkout</Text>
        <OrderedItemsList />
        <Button
          onPress={this.onCheckout}
          title="Checkout" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  title: {
    fontSize: 25
  },
  itemsList: {

  }
});

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps)(CheckoutScreen);

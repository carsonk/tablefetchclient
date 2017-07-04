import React, { Component } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";
import { connect } from "react-redux";
import { denormalize } from "normalizr";

import OrderedItemsList from "./OrderedItemsList";

class CartSidebar extends Component {
  constructor(props) {
    super(props);
    this.onCheckout = this.onCheckout.bind(this);
  }

  onCheckout() {
    this.props.navigation.navigate("Checkout", {});
  }

  render() {
    return (
      <View style={styles.orderedContainer}>
        <Text style={styles.title}>Ordered</Text>
        <OrderedItemsList />
        <Button
          title="Checkout"
          onPress={this.onCheckout}
          backgroundColor="olivedrab"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  orderedContainer: {
    height: "100%",
    padding: 20,
    width: "25%",
    backgroundColor: "#ccc"
  },
  title: {
    fontSize: 19
  }
});

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(CartSidebar);

import React, { Component } from "react";
import { ScrollView, Text, View, StyleSheet } from "react-native";
import { connect } from "react-redux";

import CartOrderItem from "../components/CartOrderItem";

class OrderedItemsList extends Component {
  constructor(props) {
    super(props);

    this.getCategory = categoryId => this.props.categories[categoryId];
    this.getItem = itemId => this.props.items[itemId];
    this.getIngredient = ingredientId => this.props.ingredients[ingredientId];
  }

  getCartItems() {
    const getCartItem = orderedItem => {
      const mapIngredient = id => this.getIngredient(id);

      return {
        key: orderedItem.index,
        item: this.getItem(orderedItem.itemId),
        addIngredients: orderedItem.addIngredients.map(mapIngredient),
        removeIngredients: orderedItem.removeIngredients.map(mapIngredient)
      };
    };

    return this.props.orderedItems.map(item =>
      <CartOrderItem {...getCartItem(item)} />
    );
  }

  render() {
    return (
      <ScrollView style={styles.orderedList}>
        {this.getCartItems()}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  orderedList: {
    marginTop: 10,
    marginBottom: 10
  }
});

function mapStateToProps(state) {
  const { categories, items, ingredients } = state.menu;
  const orderedItems = state.order.items;
  return { orderedItems, categories, items, ingredients };
}

export default connect(mapStateToProps)(OrderedItemsList);

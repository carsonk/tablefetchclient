import React, { Component } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import { denormalize } from "normalizr";

const CartOrderItem = props => (
  <View>
    <Text>{props.item.name}</Text>
  </View>
);

class CartSidebar extends Component {
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
      <View style={styles.orderedContainer}>
        <Text style={styles.title}>Ordered</Text>
        <ScrollView contentContainerStyle={styles.orderedList}>
          {this.getCartItems()}
        </ScrollView>
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
  const { categories, items, ingredients } = state.menu;
  const orderedItems = state.order.items;
  return { orderedItems, categories, items, ingredients };
}

export default connect(mapStateToProps)(CartSidebar);

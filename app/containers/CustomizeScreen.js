import React, { Component } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import { Button, CheckBox } from "react-native-elements";

import { addCustomizingIngredient, removeCustomizingIngredient, clearCustomizingItem, saveCustomizingItem } from "../actions"

const IngredientCheckBox = ({ ingredient, selected, onPress }) =>
  <CheckBox
    onPress={() => onPress(ingredient.id)}
    title={ingredient.name}
    checked={selected}
  />;

class CustomizeScreen extends Component {
  constructor(props) {
    super(props);

    this.isDefaultIngredient = ingredientId =>
      this.props.item.default_ingredients.includes(ingredientId);

    this.onIngredientSelect = this.onIngredientSelect.bind(this);
    this.isIngredientSelected = this.isIngredientSelected.bind(this);
    this.goToOrder = this.goToOrder.bind(this);
    this.onSave = this.onSave.bind(this);
    this.onCancel = this.onCancel.bind(this);
  }

  onIngredientSelect(ingredientId) {
    if (this.isIngredientSelected(ingredientId))
      this.props.dispatch(removeCustomizingIngredient(ingredientId));
    else
      this.props.dispatch(addCustomizingIngredient(ingredientId));
  }

  // TODO: This might be more appropriate as a redux selector.
  isIngredientSelected(ingredientId) {
    if (this.isDefaultIngredient(ingredientId))
      return !this.props.removeIngredients.includes(ingredientId);
    else return this.props.addIngredients.includes(ingredientId);
  }

  getCheckBoxes() {
    return this.props.item.possible_ingredients.map(ingredientId => {
      const ingredient = this.props.ingredients[ingredientId];
      const selected = this.isIngredientSelected(ingredient.id);
      return (
        <IngredientCheckBox
          onPress={this.onIngredientSelect}
          ingredient={ingredient}
          key={ingredient.id}
          selected={selected}
        />
      );
    });
  }

  goToOrder() {
    this.props.navigation.navigate("Order", {});
  }

  onCancel() {
    this.props.dispatch(clearCustomizingItem());
    this.goToOrder();
  }

  onSave() {
    this.props.dispatch(saveCustomizingItem());
    this.goToOrder();
  }

  render() {
    if (!this.props.item)
      return <View></View>;

    return (
      <ScrollView>
        {this.getCheckBoxes()}
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Button
            title="Save"
            backgroundColor="salmon"
            onPress={this.onSave}
            containerViewStyle={{ width: "40%" }} />
          <Button
            title="Cancel"
            containerViewStyle={{ width: "40%" }} />
        </View>
      </ScrollView>
    );
  }
}

function mapStateToProps(state) {
  const { items, ingredients, categories } = state.menu;
  const {
    customizingItemId,
    customizingAddIngredients,
    customizingRemoveIngredients
  } = state.order;

  return {
    item: items[customizingItemId],
    addIngredients: customizingAddIngredients,
    removeIngredients: customizingRemoveIngredients,
    ingredients,
    categories
  };
}

export default connect(mapStateToProps)(CustomizeScreen);

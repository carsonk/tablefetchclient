import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Col, Grid, Icon } from "react-native-elements";

const CartOrderIngredient = props => {
  const action = props.type == "add" ? "Add" : "Remove";
  const actionColor = props.type == "add" ? "green" : "red";

  return (
    <View style={styles.ingredientContainer}>
      <Icon type="font-awesome" name="circle-o" size={10} />
      <Text style={styles.ingredientDescription}>
        <Text style={{ color: actionColor }}>{action} </Text>
        {props.name}
      </Text>
    </View>
  );
};

const CartOrderItem = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.itemName}>{props.item.name}</Text>
      <View style={styles.ingredientsContainer}>
        {props.addIngredients.map((ingred, i) =>
          <CartOrderIngredient name={ingred.name} type="add" key={i} />
        )}
        {props.removeIngredients.map((ingred, i) =>
          <CartOrderIngredient name={ingred.name} type="remove" key={i} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    padding: 15,
    backgroundColor: "#eee"
  },
  itemName: {
    fontSize: 20,
    marginBottom: 5
  },
  ingredientContainer: {
    marginLeft: 15,
    flex: 1,
    flexDirection: "row"
  },
  ingredientDescription: {
    marginLeft: 10
  }
});

export default CartOrderItem;

import React from "react";
import { Button, View, Text, StyleSheet } from "react-native";

const MenuItemCard = props =>
  <View style={styles.menuItemCard}>
    <Text style={styles.name}>{props.name}</Text>
    <Text style={styles.description}>{props.description}</Text>
    <Button onPress={props.onOrder} title="Order" />
  </View>;

const styles = StyleSheet.create({
  menuItemCard: {
    backgroundColor: "white",
    padding: 20
  },
  name: {
    fontSize: 18
  },
  description: {
    fontSize: 15,
    color: "#888"
  }
});

export default MenuItemCard;

import React from "react";
import { TouchableHighlight, Text, StyleSheet } from "react-native";

const MenuCategoryButton = ({ title, onPress }) =>
  <TouchableHighlight style={styles.categoryButton} onPress={onPress}>
    <Text style={styles.categoryButtonText}>{title}</Text>
  </TouchableHighlight>;

const styles = StyleSheet.create({
  categoryButton: {
    backgroundColor: "white",
    padding: 20,
    width: "48%",
    margin: "1%"
  },
  categoryButtonText: {
    fontSize: 20
  }
});

export default MenuCategoryButton;

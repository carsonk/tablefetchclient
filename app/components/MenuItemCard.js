import React from "react";
import { Button, View, Text, StyleSheet } from "react-native";

const MenuItemCard = props =>
  <View>
    <Text>{props.name}</Text>
    <Text>{props.description}</Text>
    <Button onPress={props.onOrder} title="Order" />
  </View>;

const styles = StyleSheet.create({});

export default MenuItemCard;

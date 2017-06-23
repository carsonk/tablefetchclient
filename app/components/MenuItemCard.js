import React from "react";
import { Button, View, Text, StyleSheet } from "react-native";

const MenuItemCard = props =>
  <View style={styles.menuItemCard}>
    <Text style={styles.name}>{props.name}</Text>
    <Text style={styles.description}>{props.description}</Text>
    <View style={styles.buttonRow}>
      <View style={styles.buttonWrapper}>
        <Button
          onPress={() => {
            props.onOrder(props.id);
          }}
          title="Order"
          style={styles.orderButton}
        />
      </View>
      <View style={styles.buttonWrapper}>
        <Button
          onPress={() => {
            props.onCustomize(props.id);
          }}
          title="Customize"
          color="#555"
          style={styles.customizeButton}
        />
      </View>
    </View>
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
  },
  buttonRow: {
    flex: 1,
    flexDirection: "row"
  },
  buttonWrapper: {
    width: "50%",
    padding: 5
  },
  orderButton: {},
  customizeButton: {
    margin: "2%"
  }
});

export default MenuItemCard;

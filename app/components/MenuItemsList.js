import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { connect } from "react-redux";

import MenuItemCard from "./MenuItemCard";

const MenuItemsList = props => {
  const items = Object.values(props.items);

  const itemButtons = items.map(item =>
    <MenuItemCard
      key={item.id}
      onOrder={() => {
        props.onOrderItem(item.id);
      }}
      onCustomize={() => {
        props.onCustomizeItem(item.id);
      }}
      {...item}
    />
  );

  return (
    <ScrollView contentContainerStyle={styles.itemsButtonsContainer}>
      {itemButtons}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  itemsButtonsContainer: {
    paddingTop: 20,
    paddingBottom: 20
  }
});

export default MenuItemsList;

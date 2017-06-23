import React from "react";
import { ScrollView, StyleSheet } from "react-native";

import MenuCategoryButton from "./MenuCategoryButton";

const MenuCategoryList = props => {
  const categories = Object.values(props.categories);
  const categoryButtons = categories.map(category => {
    const onPress = () => {
      props.onCategoryPress(category.id);
    };
    return (
      <MenuCategoryButton
        title={category.name}
        key={category.id}
        onPress={onPress}
      />
    );
  });

  return (
    <ScrollView contentContainerStyle={styles.categoryButtonsContainer}>
      {categoryButtons}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  categoryButtonsContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    justifyContent: "center",
    padding: "5%"
  }
});

export default MenuCategoryList;

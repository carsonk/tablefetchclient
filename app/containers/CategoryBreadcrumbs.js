import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class CategoryBreadcrumbs extends Component {
  constructor(props) {
    super(props);
  }

  getCategoryBreadcrumb(categoryId, categoryName) {
    return (
      <Text
        onPress={() => this.props.onSelectCategory(categoryId)}
        key={categoryId}
        style={styles.breadcrumb}
      >
        {categoryName}
      </Text>
    );
  }

  buildTrail() {
    const trail = [];
    let currentCategory = this.props.categories[this.props.selectedCategory];

    while (currentCategory != null && currentCategory.parent != null) {
      currentCategory = this.props.categories[currentCategory.parent];
      trail.push(
        this.getCategoryBreadcrumb(currentCategory.id, currentCategory.name)
      );
    }

    trail.push(this.getCategoryBreadcrumb(null, "Menu"));
    trail.reverse();

    return trail;
  }

  render() {
    const breadcrumbs = this.buildTrail();

    return (
      <View>
        <Text style={styles.breadcrumbsContainer}>
          {breadcrumbs}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  breadcrumbsContainer: {
    paddingTop: 12,
    paddingBottom: 12
  },
  breadcrumb: {}
});

export default CategoryBreadcrumbs;

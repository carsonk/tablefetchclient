import React, { Component } from "react";
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableHighlight
} from "react-native";
import { connect } from "react-redux";

import { changeCategory, fetchMenuIfNeeded } from "../actions";

import CategoryBreadcrumbs from "./CategoryBreadcrumbs";

import MenuCategoryList from "../components/MenuCategoryList";
import MenuItemsList from "../components/MenuItemsList";

class OrderScreen extends Component {
  constructor(props) {
    super(props);
    this.onSelectCategory = this.onSelectCategory.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(fetchMenuIfNeeded());
  }

  getShownCategories() {
    const categories = Object.values(this.props.categories);
    return categories.filter(category => {
      return category.parent == this.props.selectedCategory;
    });
  }

  getShownItems() {
    const items = Object.values(this.props.items);
    return items.filter(item => {
      console.log(item);
      if (this.props.selectedCategory == null) {
        console.log("Selected category NULL! Checking that");
        return item.category.length == 0;
      } else {
        return item.category.includes(this.props.selectedCategory);
      }
    });
  }

  onOrder(itemId) {}

  onCustomize(itemId) {}

  onSelectCategory(categoryId) {
    this.props.dispatch(changeCategory(categoryId));
  }

  render() {
    const shownCategories = this.getShownCategories();
    const shownItems = this.getShownItems();

    return (
      <View style={styles.screenContainer}>
        <View style={styles.menuContainer}>
          <Text style={styles.title}>
            Categories
            {this.props.fetchingMenu && " (Loading...)"}
          </Text>
          <CategoryBreadcrumbs
            categories={this.props.categories}
            selectedCategory={this.props.selectedCategory}
            onSelectCategory={this.onSelectCategory}
          />
          {shownCategories.length > 0 &&
            <MenuCategoryList
              categories={shownCategories}
              onCategoryPress={this.onSelectCategory}
            />}
          {shownItems.length > 0 && <MenuItemsList items={shownItems} />}
        </View>
        <View style={styles.orderedContainer}>
          <Text style={styles.title}>Ordered</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    flexDirection: "row"
  },
  menuContainer: {
    height: "100%",
    padding: 20,
    width: "75%",
    backgroundColor: "#eee"
  },
  orderedContainer: {
    height: "100%",
    padding: 20,
    width: "25%",
    backgroundColor: "#ccc"
  },
  title: {
    fontSize: 19
  },
  categoryButtonsContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    justifyContent: "center",
    padding: "5%"
  }
});

function mapStateToProps(state) {
  const { menu } = state;
  const {
    categories,
    items,
    fetchingMenu,
    lastUpdated,
    error,
    selectedCategory
  } = menu;

  return {
    categories,
    items,
    fetchingMenu,
    lastUpdated,
    error,
    selectedCategory
  };
}

export default connect(mapStateToProps)(OrderScreen);

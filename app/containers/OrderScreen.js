import React, { Component } from "react";
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableHighlight
} from "react-native";
import { connect } from "react-redux";

import { fetchMenuIfNeeded } from "../actions";

import MenuCategoryList from "../components/MenuCategoryList";

class OrderScreen extends Component {
  constructor(props) {
    super(props);
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
      if (this.props.selectedCategory == null) return item.category.length == 0;
      else return this.props.selectedCategory in item.category;
    });
  }

  onOrder(itemId) {}

  onCustomize(itemId) {}

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
          <MenuCategoryList categories={shownCategories} />
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

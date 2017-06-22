import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'

import MenuItemCard from './MenuItemCard'

const MenuItemsList = (props) => {
  const items = Object.values(props.items)
  const itemButtons = items.map((item) => (
    <MenuItemcard key={item.id} {...item} />
  ))

  return (
    <ScrollView contentContainerStyle={styles.categoryButtonsContainer}>
      {itemButtons}
    </ScrollView>
  )
}
const styles = StyleSheet.create({
})

export default MenuItemsList

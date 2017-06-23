import { ADD_ITEM_TO_ORDER, REMOVE_ITEM_FROM_ORDER, SUBMIT_ORDER, SUBMIT_ORDER_SUCCESS, SUBMIT_ORDER_FAIL, CLEAR_ORDER_SUCCESS } from '../actions'

const defaultOrderState = {
  items: [],
  submittingOrder: false,
  orderSuccess: false,
  currentIndex: 0
}

export default function order(state = defaultOrderState, action) {
  switch (action.type) {
    case ADD_ITEM_TO_ORDER:
      const addedItem = {
        index: state.currentIndex,
        itemId: action.itemId,
        addIngredients: action.addIngredients,
        removeIngredients: action.removeIngredients
      }

      return {
        ...state,
        currentIndex: state.currentIndex + 1,
        items: [...state.items, addedItem]
      }
    case REMOVE_ITEM_FROM_ORDER:
      return {
        ...state,
        items: state.items.filter((item) => { item.index !== action.itemIndex })
      }
    case SUBMIT_ORDER:
      return {
        ...state,
        submittingOrder: true
      }
    case SUBMIT_ORDER_SUCCESS:
      return {
        ...state,
        submittingOrder: false,
        orderSuccess: true
      }
    case CLEAR_ORDER_SUCCESS:
      return {
        ...state,
        orderSuccess: false
      }
    default:
      return state;
  }
}

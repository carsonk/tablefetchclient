import {
  ADD_ITEM_TO_ORDER,
  REMOVE_ITEM_FROM_ORDER,
  BEGIN_CUSTOMIZING_ITEM,
  ADD_CUSTOMIZING_INGREDIENT,
  REMOVE_CUSTOMIZING_INGREDIENT,
  SUBMIT_ORDER,
  SUBMIT_ORDER_SUCCESS,
  SUBMIT_ORDER_FAIL,
  CLEAR_ORDER_SUCCESS
} from "../actions";

import { union, without } from "lodash";

const defaultOrderState = {
  items: [],
  submittingOrder: false,
  orderSuccess: false,
  currentIndex: 0
};

export default function order(state = defaultOrderState, action) {
  let addList = [], removeList = [];

  switch (action.type) {
    case ADD_ITEM_TO_ORDER:
      const addedItem = {
        index: state.currentIndex,
        itemId: action.itemId,
        addIngredients: action.addIngredients,
        removeIngredients: action.removeIngredients
      };

      return {
        ...state,
        currentIndex: state.currentIndex + 1,
        items: [...state.items, addedItem]
      };
    case REMOVE_ITEM_FROM_ORDER:
      return {
        ...state,
        items: state.items.filter(item => {
          item.index !== action.itemIndex;
        })
      };
    case BEGIN_CUSTOMIZING_ITEM:
      return {
        ...state,
        customizingItemId: action.itemId,
        customizingAddIngredients: [],
        customizingRemoveIngredients: []
      };
    case ADD_CUSTOMIZING_INGREDIENT:
      addList = state.customizingAddIngredients;
      removeList = state.customizingRemoveIngredients;

      return {
        ...state,
        customizingAddIngredients: union(addList, [ action.ingredientId ]),
        customizingRemoveIngredients: without(removeList, action.ingredientId)
      }
    case REMOVE_CUSTOMIZING_INGREDIENT:
      addList = state.customizingAddIngredients;
      removeList = state.customizingRemoveIngredients;

      return {
        ...state,
        customizingAddIngredients: without(addList, action.ingredientId),
        customizingRemoveIngredients: union(removeList, [ action.ingredientId ])
      }
    case SUBMIT_ORDER:
      return {
        ...state,
        submittingOrder: true
      };
    case SUBMIT_ORDER_SUCCESS:
      return {
        ...state,
        submittingOrder: false,
        orderSuccess: true
      };
    case CLEAR_ORDER_SUCCESS:
      return {
        ...state,
        orderSuccess: false
      };
    default:
      return state;
  }
}

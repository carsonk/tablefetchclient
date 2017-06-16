import { combineReducers } from 'redux'
import { normalize } from 'normalizr'

import { REQUEST_MENU, RECEIVE_MENU, RECEIVE_MENU_FAIL } from '../actions'
import { menuItemListSchema } from '../schemas'

const defaultMenuState = {
  categories: [],
  items: [],
  fetchingMenu: false,
  lastUpdated: null,
  error: null
};

function menu(state = defaultMenuState, action) {
  switch (action.type) {
    case REQUEST_MENU:
      return {
        ...state,
        fetchingMenu: true
      }
    case RECEIVE_MENU:
      const normalizedData = normalize(action.items, menuItemListSchema);
      const entities = normalizedData.entities;

      return {
        ...state,
        fetchingMenu: false,
        categories: entities.menuCategories,
        items: entities.menuItems,
        ingredients: entities.menuIngredients,
        lastUpdated: action.receivedAt
      }
    case RECEIVE_MENU_FAIL:
      return {
        ...state,
        fetchingMenu: false,
        error: action.error
      }
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  menu
});

export default rootReducer;

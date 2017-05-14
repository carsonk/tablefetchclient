import { CALL_API, Schemas } from '../middleware/api'

export const MENU_ITEM_PAGE_LOADED = 'MENU_ITEM_PAGE_LOADED';
export const MENU_ITEM_PAGE_UNLOADED = 'MENU_ITEM_PAGE_UNLOADED';

export const CART_ITEM_ADD = 'CART_ITEM_ADD';
export const CART_ITEM_REMOVE = 'CART_ITEM_REMOVE';
export const CART_CHECKOUT = 'CART_CHECKOUT';

export const ITEM_LIST_REQUEST = 'ITEM_LIST_REQUEST';
export const ITEM_LIST_SUCCESS = 'ITEM_LIST_SUCCESS';
export const ITEM_LIST_FAILURE = 'ITEM_LIST_FAILURE';

const fetchItemList = () => {
  return {
    [CALL_API]: {
      types: [ ITEM_LIST_REQUEST, ITEM_LIST_SUCCESS, ITEM_LIST_FAILURE ],
      endpoint: 'menu/items',
      schema: Schemas.MENU_ITEM_ARRAY
    }
  }
};

export const CATEGORY_LIST_REQUEST = 'CATEGORY_LIST_REQUEST';
export const CATEGORY_LIST_SUCCESS = 'CATEGORY_LIST_SUCCESS';
export const CATEGORY_LIST_FAILURE = 'CATEGORY_LIST_FAILURE';

const fetchCategoryList = () => {
  return {
    [CALL_API]: {
      types: [ CATEGORY_LIST_REQUEST, CATEGORY_LIST_SUCCESS, CATEGORY_LIST_FAILURE ],
      endpoint: 'menu/categories',
      schema: Schemas.MENU_CATEGORY_ARRAY
    }
  }
}

export const RESET_ERROR_MESSAGE = 'RESET_ERROR_MESSAGE'

export const resetErrorMessage = () => ({
  type: RESET_ERROR_MESSAGE
})

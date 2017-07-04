export const REQUEST_MENU = "REQUEST_MENU";
export const RECEIVE_MENU = "RECEIVE_MENU";
export const RECEIVE_MENU_FAIL = "RECEIVE_MENU_FAIL";
export const CHANGE_CATEGORY = "CHANGE_CATEGORY";

const requestApiUrl = "http://10.0.2.2:8000/api";

export function changeCategory(categoryId) {
  return {
    type: CHANGE_CATEGORY,
    categoryId
  };
}

function requestMenu() {
  return {
    type: REQUEST_MENU
  };
}

function receiveMenu(json) {
  return {
    type: RECEIVE_MENU,
    items: json.results,
    receivedAt: Date.now()
  };
}

function receiveMenuFailed(error) {
  console.log("Error! " + error);

  return {
    type: RECEIVE_MENU_FAIL,
    error: error
  };
}

function fetchMenu() {
  const requestMenuUrl = requestApiUrl + "/menu/all";

  return dispatch => {
    dispatch(requestMenu());
    return fetch(requestMenuUrl)
      .then(response => response.json())
      .then(json => dispatch(receiveMenu(json)))
      .catch(error => dispatch(receiveMenuFailed(error)));
  };
}

export function fetchMenuIfNeeded() {
  return (dispatch, getState) => {
    return dispatch(fetchMenu());
  };
}

export const ADD_ITEM_TO_ORDER = "ADD_ITEM_TO_ORDER";
export const REMOVE_ITEM_FROM_ORDER = "REMOVE_ITEM_FROM_ORDER";
export const SUBMIT_ORDER = "SUBMIT_ORDER";
export const SUBMIT_ORDER_SUCCESS = "SUBMIT_ORDER_SUCCESS";
export const SUBMIT_ORDER_FAIL = "SUBMIT_ORDER_FAIL";
export const CLEAR_ORDER_SUCCESS = "CLEAR_ORDER_SUCCESS";
export const BEGIN_CUSTOMIZING_ITEM = "CUSTOMIZE_ITEM";
export const ADD_CUSTOMIZING_INGREDIENT = "ADD_CUSTOMIZING_INGREDIENT";
export const REMOVE_CUSTOMIZING_INGREDIENT = "REMOVE_CUSTOMIZING_INGREDIENT";
export const CLEAR_CUSTOMIZING_ITEM = "CLEAR_CUSTOMIZING_ITEM";
export const SAVE_CUSTOMIZING_ITEM = "SAVE_CUSTOMIZING_ITEM";

export function addItemToOrder(
  itemId,
  addIngredients = [],
  removeIngredients = []
) {
  return {
    type: ADD_ITEM_TO_ORDER,
    itemId,
    addIngredients,
    removeIngredients
  };
}

export function removeItemFromOrder(itemIndex) {
  return {
    type: REMOVE_ITEM_FROM_ORDER,
    itemIndex
  };
}

export function beginCustomizingItem(itemId) {
  return {
    type: BEGIN_CUSTOMIZING_ITEM,
    itemId
  };
}

export function addCustomizingIngredient(ingredientId) {
  return {
    type: ADD_CUSTOMIZING_INGREDIENT,
    ingredientId
  };
}

export function removeCustomizingIngredient(ingredientId) {
  return {
    type: REMOVE_CUSTOMIZING_INGREDIENT,
    ingredientId
  };
}

export function clearCustomizingItem() {
  return {
    type: CLEAR_CUSTOMIZING_ITEM
  };
}

export function saveCustomizingItem() {
  return (dispatch, getState) => {
    const { order } = getState();
    dispatch(
      addItemToOrder(
        order.customizingItemId,
        order.customizingAddIngredients,
        order.customizingRemoveIngredients
      )
    );
    dispatch(clearCustomizingItem());
  };
}

function submitOrderSucceeded(party = 0) {
  return {
    type: SUBMIT_ORDER_SUCCESS
  };
}

function submitOrderFailed(error) {
  return {
    type: SUBMIT_ORDER_FAIL,
    error
  };
}

export function submitOrder() {
  const submitOrderUrl = requestApiUrl + "/orders/submit";

  return (dispatch, getState) => {
    dispatch({ type: SUBMIT_ORDER });

    const { items } = getState().order;

    const submission = {
      items: items.map((item) => {
        return {
          id: item.itemId,
          add_ingredients: item.addIngredients,
          remove_ingredients: item.removeIngredients,
          quantity: 1
        }
      }),
      party: 0,
      member: 0
    };

    const fetchConfig = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(submission)
    };

    return fetch(submitOrderUrl, fetchConfig)
      .then(response => response.json())
      .then(json => {
        if (json.success)
          dispatch(submitOrderSucceeded(json.party))
        else
          dispatch(submitOrderFailed(json["message"]))
      })
      .catch(error => dispatch(submitOrderFailed(error)));
  };
}

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

function submitOrderSucceeded() {
  return {
    type: SUBMIT_ORDER_SUCCESS
  };
}

function submitOrderFailed(error) {
  return {
    type: SUBMIT_ORDER_FAIL
  };
}

export function submitOrder() {
  const submitOrderUrl = requestApiUrl + "/order/";

  return (dispatch, getState) => {
    dispatch({ type: SUBMIT_ORDER });

    const { items } = getState();

    const fetchConfig = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ items })
    };

    return fetch(submitOrderUrl, fetchConfig)
      .then(response => response.json)
      .then(json => {
        if (error in json) dispatch(submitOrderFailed(json.error));
        else dispatch(submitOrderSucceed());
      })
      .catch(error => dispatch(submitOrderFailed(error)));
  };
}

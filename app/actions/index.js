export const REQUEST_MENU = 'REQUEST_MENU';
export const RECEIVE_MENU = 'RECEIVE_MENU';
export const RECEIVE_MENU_FAIL = 'RECEIVE_MENU_FAIL';

const requestApiUrl = 'http://10.0.2.2:8000/api';

function requestMenu() {
  return {
    type: REQUEST_MENU
  }
}

function receiveMenu(json) {
  return {
    type: RECEIVE_MENU,
    items: json.results,
    receivedAt: Date.now()
  }
}

function receiveMenuFailed(error) {
  console.log("Error! " + error)

  return {
    type: RECEIVE_MENU_FAIL,
    error: error
  }
}

function fetchMenu() {
  const requestMenuUrl = requestApiUrl + '/menu/all'

  return dispatch => {
    dispatch(requestMenu());
    return fetch(requestMenuUrl)
      .then(response => response.json())
      .then(json => dispatch(receiveMenu(json)))
      .catch(error => dispatch(receiveMenuFailed(error)))
  }
}

export function fetchMenuIfNeeded() {
  return (dispatch, getState) => {
    return dispatch(fetchMenu());
  }
}

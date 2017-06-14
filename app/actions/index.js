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
    items: json.data.results,
    receivedAt: Date.now()
  }
}

function fetchMenu() {
  return dispatch => {
    dispatch(requestMenu());
    return fetch(requestApiUrl)
      .then(response => response.json())
      .then(json => dispatch(receiveMenu(json)));
  }
}

export function fetchMenuIfNeeded() {
  return (dispatch, getState) => {
    return dispatch(fetchMenu());
  }
}

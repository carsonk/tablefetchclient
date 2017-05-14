import { combineReducers } from 'redux';
import merge from 'lodash/merge'
import * as ActionTypes from '../actions'
import { routerReducer as routing } from 'react-native-redux-router'

const entities = (state = { menuItems: {}, menuCategories: {} }, action) => {
  if (action.response && action.response.entities) {
    return merge({}, state, action.response.entities);
  }

  return state;
}

const errorMessage = (state = null, action) => {
  const { type, error } = action;

  if (type === ActionTypes.RESET_ERROR_MESSAGE) {
    return null;
  } else if(error) {
    return error;
  }

  return state;
};

export default combineReducers({
  errorMessage,
  routing
});

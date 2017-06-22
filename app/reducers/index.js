import { combineReducers } from 'redux'

import menu from './menu'
import order from './order'

const rootReducer = combineReducers({
  menu,
  order
});

export default rootReducer;

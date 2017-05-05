

export default (state = {}, action) => {
  switch(action.type) {
    case 'MENU_ITEM_PAGE_LOADED':
      return {
        ...state
      }
    case 'MENU_ITEM_PAGE_UNLOADED':
      return {};
    default:
      return state;
  }
}

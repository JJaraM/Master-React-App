import produce from 'immer';
import {
  LOAD_ITEMS,
  LOAD_ITEMS_SUCCESS,
  LOAD_COLLAPSE,
  LOAD_COLLAPSE_SUCESS,
} from './constants';

export const initialState = {
  theme: 'mnyama',
  items: false,
  sidebarBig: true,
};

/* eslint-disable default-case, no-param-reassign */
const dashboardPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_ITEMS:
        draft.items = false;
        break;

      case LOAD_ITEMS_SUCCESS:
        draft.items = action.items;
        break;

      case LOAD_COLLAPSE:
        break;

      case LOAD_COLLAPSE_SUCESS:
        draft.sidebarBig = action.sidebarBig;
        break;
    }
  });
export default dashboardPageReducer;

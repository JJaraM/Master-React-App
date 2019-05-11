import produce from 'immer';
import {
  LOAD_ITEMS,
  LOAD_ITEMS_SUCCESS,
  LOAD_COLLAPSE,
  LOAD_COLLAPSE_SUCESS,
  SAVE_ALERT_MESSAGES,
} from './constants';

export const initialState = {
  theme: 'mnyama',
  items: false,
  sidebarBig: true,
  alertMessages: [],
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

      case SAVE_ALERT_MESSAGES:
        draft.alertMessages = action.alertMessages;
        break;
    }
  });
export default dashboardPageReducer;

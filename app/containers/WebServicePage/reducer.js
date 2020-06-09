import produce from 'immer';
import { FETCH_DONE, FILTER, COLLAPSE } from './constants';

export const initialState = {
  items: [],
  text: '',
  collapse: false,
};

/* eslint-disable default-case, no-param-reassign */
const webServicePageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case FETCH_DONE:
        draft.items = action.items;
        break;
      
      case FILTER:
        draft.text = action.text;
        break;

      case COLLAPSE:
        draft.collapse = !draft.collapse;
        break;
    }
  });

export default webServicePageReducer;

import produce from 'immer';
import { SELECTION } from './constants';

export const initialState = {
    item: false
};

/* eslint-disable default-case, no-param-reassign */
const webServiceHistoryReducer = (state = initialState, action) =>
  produce(state, draft => { 
    switch (action.type) {
      case SELECTION:
        draft.item = action.item;
        break;
    }
  });

export default webServiceHistoryReducer;

import produce from 'immer';
import { SELECT } from './constants';

export const initialState = {
  item: undefined
};

/* eslint-disable default-case, no-param-reassign */
const itemEndPointReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SELECT:
        draft.item = action.item;
        break;
    }
  });

export default itemEndPointReducer;

import produce from 'immer';
import {
  EXPAND,
  EXPAND_SUCCESS,
} from './constants';

export const initialState = {
  collapse: false,
  identifier: "",
  identifiers: [],
};

const sideMenuListItemReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case EXPAND:
        const identifiers = [...state.identifiers];
        const index = identifiers.findIndex((identifier) => {
          return identifier === action.identifier;
        })
        if (index === -1) {
          draft.identifiers = [...state.identifiers, action.identifier];
        } else {
          identifiers.splice(index, 1);
          return Object.assign({}, state, {
            identifiers
          })
        }
        break;

      case EXPAND_SUCCESS:
        draft.collapse = action.collapse;
        break;
    }
  });
export default sideMenuListItemReducer;

import produce from 'immer';
import { EXPAND, EXPAND_SUCCESS } from './constants';

export const initialState = {
  collapse: false,
  identifier: '',
  identifiers: [],
};

/* eslint-disable no-param-reassign */
function expand(state, action, draft) {
  const identifiers = [...state.identifiers];
  const index = identifiers.findIndex(
    identifier => identifier === action.identifier,
  );
  if (index === -1) {
    draft.identifiers = [...state.identifiers, action.identifier];
  } else {
    identifiers.splice(index, 1);
    return Object.assign({}, state, {
      identifiers,
    });
  }
  return null;
}

/* eslint-disable default-case */
const SideMenuItemReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case EXPAND: {
        expand(state, action, draft);
        break;
      }

      case EXPAND_SUCCESS:
        draft.collapse = action.collapse;
        break;
    }
  });
export default SideMenuItemReducer;

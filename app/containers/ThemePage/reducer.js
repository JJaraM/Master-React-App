import produce from 'immer';
import { LOAD_CHANGE_THEME } from 'containers/ThemePage/constants';

export const initialState = {};

/* eslint-disable default-case, no-param-reassign */
const themePageReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case LOAD_CHANGE_THEME:
        break;
    }
  });

export default themePageReducer;

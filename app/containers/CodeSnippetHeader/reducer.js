import produce from 'immer';
import { SHOW, CHANGE_TITLE } from './constants';

export const initialState = {
  show: false,
  title: ''
};

/* eslint-disable default-case, no-param-reassign */
const codeSnippetHeaderReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SHOW:
        draft.show = action.show;
        break;

      case CHANGE_TITLE:
        draft.title = action.title;
        break;
    }
  });

export default codeSnippetHeaderReducer;

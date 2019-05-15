import produce from 'immer';
import { SELECTION, ITEMS } from './constants';

export const initialState = {
  language: '',
  items: [],
};

/* eslint-disable default-case, no-param-reassign */
const codeSnippetLanguageItemReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SELECTION:
        draft.language = action.language;
        break;

      case ITEMS:
        draft.items = action.items;
        break;
    }
  });

export default codeSnippetLanguageItemReducer;

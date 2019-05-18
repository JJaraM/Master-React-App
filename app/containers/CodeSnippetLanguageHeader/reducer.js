/*
 *
 * CodeSnippetLanguageHeader reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION, SHOW_ADD, ON_CHANGE_LANGUAGE, ON_SAVE_SUCCESS } from './constants';

export const initialState = {
  showAdd: false,
  language: '',
};

/* eslint-disable default-case, no-param-reassign */
const codeSnippetLanguageHeaderReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;

      case SHOW_ADD:
        draft.showAdd = action.showAdd;
        break;

      case ON_CHANGE_LANGUAGE:
        draft.language = action.language;
        break;

      case ON_SAVE_SUCCESS:
        draft.showAdd = action.showAdd;
        draft.language = action.language;
        break;
    }
  });

export default codeSnippetLanguageHeaderReducer;

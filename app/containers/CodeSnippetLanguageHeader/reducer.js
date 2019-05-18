/*
 *
 * CodeSnippetLanguageHeader reducer
 *
 */
import produce from 'immer';
import {
  DEFAULT_ACTION,
  SHOW_ADD,
  ON_CHANGE_LANGUAGE,
  ON_SAVE_SUCCESS,
} from './constants';

export const initialState = {
  viewShowAdd: false,
  language: '',
};

/* eslint-disable default-case, no-param-reassign */
const codeSnippetLanguageHeaderReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;

      case SHOW_ADD:
        draft.viewShowAdd = action.viewShowAdd;
        break;

      case ON_CHANGE_LANGUAGE:
        draft.language = action.language;
        break;

      case ON_SAVE_SUCCESS:
        draft.viewShowAdd = action.viewShowAdd;
        draft.language = action.language;
        break;
    }
  });

export default codeSnippetLanguageHeaderReducer;

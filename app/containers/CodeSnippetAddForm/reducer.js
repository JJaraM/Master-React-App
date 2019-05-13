/*
 *
 * CodeSnippetAddForm reducer
 *
 */
import produce from 'immer';
import {
  SAVE_CODE_SNIPPET,
  SAVE_TYPE,
  SAVE_TITLE,
  SAVE_SUCCESS,
  RENDER_SUCCESS,
} from './constants';

export const initialState = {
  codeSnippet: '',
  language: '',
  title: '',
  save: 0,
};

/* eslint-disable default-case, no-param-reassign */
const codeSnippetAddFormReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SAVE_CODE_SNIPPET:
        draft.codeSnippet = action.codeSnippet;
        break;

      case SAVE_TYPE:
        draft.language = action.language;
        break;

      case SAVE_TITLE:
        draft.title = action.title;
        break;

      case SAVE_SUCCESS:
        draft.save = action.save;
        break;

      case RENDER_SUCCESS:
        draft.codeSnippet = action.codeSnippet;
        draft.language = action.language;
        draft.title = action.title;
        break;
    }
  });

export default codeSnippetAddFormReducer;

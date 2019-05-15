/*
 *
 * CodeSnippetApp reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION, LOAD_LANGUAGES_SUCCESS } from './constants';

export const initialState = {
  languages: false
};

/* eslint-disable default-case, no-param-reassign */
const codeSnippetAppReducer = (state = initialState, action) =>
  produce(state, draft  => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;

      case LOAD_LANGUAGES_SUCCESS:
        draft.languages = action.languages;
        break;

    }
  });

export default codeSnippetAppReducer;

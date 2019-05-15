import produce from 'immer';
import { SELECTION } from './constants';

export const initialState = {
  codeSnippet: null,
};

/* eslint-disable default-case, no-param-reassign */
const codeSnippetLanguagesDescriptionItemReducer = (
  state = initialState,
  action,
) =>
  produce(state, draft => {
    switch (action.type) {
      case SELECTION:
        draft.codeSnippet = action.codeSnippet;
        break;
    }
  });

export default codeSnippetLanguagesDescriptionItemReducer;

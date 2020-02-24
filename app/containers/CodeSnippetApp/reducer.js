/*
 *
 * CodeSnippetApp reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION, LOAD_LANGUAGES_SUCCESS } from './constants';

export const initialState = {
  languages: [],
};

/* eslint-disable default-case, no-param-reassign */
const codeSnippetAppReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;

      /*case LOAD_LANGUAGES_SUCCESS:
        let ids = state.languages.slice().map(i => i.type);
        let idAlreadyExists = ids.indexOf(action.languages.type) > -1;        
        if (!idAlreadyExists) {
          return { 
            ...state,
            languages:[...state.languages, action.languages]
          }
        }*/
        case LOAD_LANGUAGES_SUCCESS:
          draft.languages = action.languages;
          break;
      

      default:
        return state
    }
  });

export default codeSnippetAppReducer;

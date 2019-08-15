/*
 *
 * ExamPage reducer
 *
 */
import produce from 'immer';
import {
  DEFAULT_ACTION,
  LOAD_ALL_ITEMS_SUCCESS,
  SELECT_OPTION,
  NEXT_QUESTION,
  NEXT_QUESTION_SUCCESS,
  SELECTED_OPTION,
  NEXT_QUESTION_ON_NEXT,
  REFRESH_SELECTION,
  REFRESH_SELECTION_SUCCESS,
} from './constants';

export const initialState = {
  items: false,
  selectedOption: 0,
  questionNumber: false,
  option: false,
  options: [],
  results: [],
};

/* eslint-disable default-case, no-param-reassign */
const examPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_ALL_ITEMS_SUCCESS:
        draft.items = action.items;
        break;

      case NEXT_QUESTION:
        draft.selectedOption = action.questionNumber;
        break;

      case NEXT_QUESTION_ON_NEXT:
        draft.selectedOption = action.selectedOption;
        draft.questionNumber = action.questionNumber;
        break;

      case REFRESH_SELECTION:
        draft.selectedOption = action.selectedOption;
        break;

      case REFRESH_SELECTION_SUCCESS:
        draft.selectedOption = action.selectedOption;
        draft.options = action.options;
        break;

      case SELECTED_OPTION:
        draft.selectedOption = action.selectedOption;
        break;

      case NEXT_QUESTION_SUCCESS: {
        const results = [...state.results];
        const index = results.findIndex(
          result => result.questionNumber === action.selectedOption,
        );

        const result = {
          questionNumber: action.selectedOption,
          responses: action.options,
        };

        if (index >= 0) {
          results.splice(index, 1);
        }

        console.log(results);

        draft.results = [...state.results, result];

        break;
      }

      case SELECT_OPTION: {
        const options = [...state.options];
        const index = options.findIndex(option => option === action.option);
        if (index === -1) {
          draft.options = [...state.options, action.option];
        }
        if (index !== -1) {
          options.splice(index, 1);
          return Object.assign({}, state, {
            options,
          });
        }
        break;
      }
    }
  });

export default examPageReducer;

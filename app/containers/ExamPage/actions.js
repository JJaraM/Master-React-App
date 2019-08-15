/*
 *
 * ExamPage actions
 *
 */

import {
  DEFAULT_ACTION,
  LOAD_ALL_ITEMS,
  LOAD_ALL_ITEMS_SUCCESS,
  SELECT_OPTION,
  NEXT_QUESTION,
  NEXT_QUESTION_SUCCESS,
  NEXT_QUESTION_ON_NEXT,
  SELECTED_OPTION,
  SAVE,
  REFRESH_SELECTION,
  REFRESH_SELECTION_SUCCESS,
} from './constants';

export function loadAllItems() {
  return {
    type: LOAD_ALL_ITEMS,
    loading: true,
  };
}

export function loadAllItemsSuccess(items, loading) {
  return {
    type: LOAD_ALL_ITEMS_SUCCESS,
    items,
    loading,
  };
}
export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function selectResponse(questionNumber, option) {
  return {
    type: SELECT_OPTION,
    questionNumber,
    option,
  };
}

export function nextQuestion(questionNumber) {
  return {
    type: NEXT_QUESTION,
    questionNumber,
  };
}

export function selectedOption(selectedOption) {
  return {
    type: SELECTED_OPTION,
    selectedOption,
  };
}

export function refreshSelection(selectedOption) {
  return {
    type: REFRESH_SELECTION,
    selectedOption,
  };
}

export function nextQuestionOnNext(questionNumber) {
  return {
    type: NEXT_QUESTION_ON_NEXT,
    questionNumber,
  };
}

export function save() {
  return {
    type: SAVE,
  };
}

export function nextQuestionSuccess(selectedOption, options) {
  return {
    type: NEXT_QUESTION_SUCCESS,
    selectedOption,
    options,
  };
}

export function refreshOnSuccessAction(selectedOption, options) {
  return {
    type: REFRESH_SELECTION_SUCCESS,
    selectedOption,
    options,
  };
}

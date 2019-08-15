import { call, put, takeLatest, select } from 'redux-saga/effects';
import request from 'utils/request';

import {
  LOAD_ALL_ITEMS,
  NEXT_QUESTION,
  NEXT_QUESTION_ON_NEXT,
  SAVE,
  REFRESH_SELECTION,
} from './constants';

import {
  loadAllItemsSuccess,
  nextQuestionSuccess,
  nextQuestionOnNext,
  selectedOption,
  refreshOnSuccessAction,
} from './actions';

import {
  makeSelectedOption,
  makeSelectedOptions,
  makeSelectResults,
  makeQuestionNumber,
} from './selectors';

export default function* init() {
  yield takeLatest(LOAD_ALL_ITEMS, loadAllItems);
  yield takeLatest(SAVE, nextQuestion);
  yield takeLatest(REFRESH_SELECTION, refreshSelection);
}

export function* refreshSelection() {
  const selectedOption = yield select(makeSelectedOption());
  const responses = yield select(makeSelectResults());
  let array = [];
  responses.map(response => {
    if (response.questionNumber === selectedOption) {
      array = response.responses;
    }
  });
  yield put(refreshOnSuccessAction(selectedOption, array));
}

export function* nextQuestion() {
  const options = yield select(makeSelectedOptions());
  const selectedOption = yield select(makeSelectedOption());
  yield put(nextQuestionSuccess(selectedOption, options));
}

export function* loadAllItems() {
  const requestURL = `https://ws-exam.herokuapp.com/exam/2`;
  try {
    const items = yield call(request, requestURL);
    yield put(loadAllItemsSuccess(items, 1));
  } catch (err) {
    yield put(loadAllItemsSuccess([], 2));
  }
}

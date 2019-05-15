import { call, put, takeLatest, select } from 'redux-saga/effects';
import request from 'utils/request';
import { LOAD_LANGUAGES } from './constants';
import { loadAllItemsSuccess } from './actions';

export default function* init() {
  yield takeLatest(LOAD_LANGUAGES, loadLanguages);
}

export function* loadLanguages() {
  const requestURL = `https://ws-code-snippet.herokuapp.com/v1/codeSnippet/allLanguages`;
  try {
    const items = yield call(request, requestURL);
    yield put(loadAllItemsSuccess(items, 1));
  } catch (err) {
    yield put(loadAllItemsSuccess([], 2));
  }
}

import { call, put, takeLatest, select } from 'redux-saga/effects';
import request from 'utils/request';
import { loadAllItemsSuccess, selectionItem } from './actions';
import { LOAD_ALL_ITEMS, SELECTION } from './constants';
import { makeSelectionId, makeAllItems } from './selectors';

export default function* init() {
  yield takeLatest(LOAD_ALL_ITEMS, loadAllItems);
  yield takeLatest(SELECTION, selection);
}

export function* loadAllItems() {
  const requestURL = `https://ws-code-snippet.herokuapp.com/codeSnippet/0/100`;
  try {
    const items = yield call(request, requestURL);
    yield put(loadAllItemsSuccess(items, 1));
  } catch (err) {
    yield put(loadAllItemsSuccess([], 2));
  }
}

export function* selection() {
  const id = yield select(makeSelectionId());
  const items = yield select(makeAllItems());
  const item = items.find(x => x.id === id);
  yield put(selectionItem(item));
}

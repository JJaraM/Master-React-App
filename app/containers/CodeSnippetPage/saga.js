import { call, put, takeLatest, select } from 'redux-saga/effects';
import request from 'utils/request';
import {
  loadAllItemsSuccess,
  selectionItem,
  selectRenderViewSuccess,
} from './actions';
import { LOAD_ALL_ITEMS, SELECTION, RENDER_ADD_VIEW } from './constants';
import { makeSelectionId, makeAllItems, makeRenderAddView } from './selectors';

export default function* init() {
  yield takeLatest(LOAD_ALL_ITEMS, loadAllItems);
  yield takeLatest(SELECTION, selection);
  yield takeLatest(RENDER_ADD_VIEW, renderAddView);
}

export function* loadAllItems() {
  const requestURL = `https://ws-code-snippet.herokuapp.com/v1/codeSnippet/0/100`;
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

export function* renderAddView() {
  const result = yield select(makeRenderAddView());
  yield put(selectRenderViewSuccess(!result));
}

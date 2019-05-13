import { call, put, takeLatest, select } from 'redux-saga/effects';
import request from 'utils/request';
import { renderEdit } from 'containers/CodeSnippetAddForm/actions';
import {
  loadAllItemsSuccess,
  selectionItem,
  selectRenderViewSuccess,
} from './actions';

import {
  LOAD_ALL_ITEMS,
  SELECTION,
  RENDER_ADD_VIEW,
  REMOVE_CODE_SNIPPET,
  RENDER_DONE,
} from './constants';
import {
  makeSelectionId,
  makeAllItems,
  makeRenderAddView,
  makeIdToRemove,
} from './selectors';

export default function* init() {
  yield takeLatest(LOAD_ALL_ITEMS, loadAllItems);
  yield takeLatest(SELECTION, selection);
  yield takeLatest(RENDER_ADD_VIEW, renderAddView);
  yield takeLatest(REMOVE_CODE_SNIPPET, removeCodeSnippet);
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
  const id = yield select(makeSelectionId());
  const result = yield select(makeRenderAddView());

  if (id) {
    const items = yield select(makeAllItems());
    const item = items.find(x => x.id === id);
    yield put(renderEdit(item.content, item.type, item.title));
  } else {
    yield put(renderEdit('', '', ''));
  }

  yield put(selectRenderViewSuccess(!result));
}

export function* removeCodeSnippet() {
  const idToRemove = yield select(makeIdToRemove());
  let items = yield select(makeAllItems());
  const requestURL = `https://ws-code-snippet.herokuapp.com/v1/codeSnippet/${idToRemove}`;
  try {
    const result = yield call(request, requestURL, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    items = items.filter(item => item.id !== idToRemove);
    yield put(loadAllItemsSuccess(items, 1));
  } catch (err) {
    yield put(loadAllItemsSuccess(items, 2));
  }
}

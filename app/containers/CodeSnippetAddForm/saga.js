import { call, put, takeLatest, select } from 'redux-saga/effects';
import request from 'utils/request';
import { loadAllItemsSuccess } from 'containers/CodeSnippetPage/actions';
import {
  makeAllItems,
  makeSelectionId,
} from 'containers/CodeSnippetPage/selectors';
import {
  saveSuccess,
  saveType,
  saveTitle,
  saveCodeSnippet,
  renderEdit,
} from './actions';
import { SAVE, LOAD, UPDATE } from './constants';

import {
  makeSelectCodeSnippet,
  makeSelectType,
  makeSelectTitle,
} from './selectors';

export default function* codeSnippetAddFormSaga() {
  yield takeLatest(SAVE, save);
  yield takeLatest(UPDATE, update);
  yield takeLatest(LOAD, load);
}

export function* load() {
  const id = yield select(makeSelectionId());
  if (id) {
    const items = yield select(makeAllItems());
    const item = items.find(x => x.id === id);
    yield put(renderEdit(item.content, item.type, item.title));
  }
}

export function* update() {
  const items = yield select(makeAllItems());
  const codeSnippet = yield select(makeSelectCodeSnippet());
  const type = yield select(makeSelectType());
  const title = yield select(makeSelectTitle());
  const id = yield select(makeSelectionId());
  const idx = items.findIndex(x => x.id === id);
  const requestURL = `https://ws-code-snippet.herokuapp.com/v1/codeSnippet/${id}`;

  const item = JSON.stringify({
    title,
    content: codeSnippet,
    type,
    id,
  });

  try {
    const result = yield call(request, requestURL, {
      method: 'PUT',
      body: item,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    items[idx] = result[0];
    yield put(saveSuccess(1));
    yield put(loadAllItemsSuccess(items.slice()));
  } catch (err) {}
}

export function* save() {
  const codeSnippet = yield select(makeSelectCodeSnippet());
  const type = yield select(makeSelectType());
  const title = yield select(makeSelectTitle());
  const items = yield select(makeAllItems());
  let result = 2;
  const requestURL = `https://ws-code-snippet.herokuapp.com/v1/codeSnippet`;

  const item = JSON.stringify({
    title,
    content: codeSnippet,
    type,
  });

  try {
    const requestResult = yield call(request, requestURL, {
      method: 'POST',
      body: item,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    items.unshift(requestResult);
    result = 1;
  } catch (err) {
    result = 2;
  } finally {
    yield put(saveSuccess(result));
    yield put(saveType(''));
    yield put(saveTitle(''));
    yield put(saveCodeSnippet(''));
    if (result === 1) {
      yield put(loadAllItemsSuccess(items));
    }
  }
}

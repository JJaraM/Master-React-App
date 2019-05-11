import { call, put, takeLatest, select } from 'redux-saga/effects';
import request from 'utils/request';
import { loadAllItemsSuccess } from 'containers/CodeSnippetPage/actions';
import { makeAllItems } from 'containers/CodeSnippetPage/selectors';
import { saveSuccess } from './actions';
import { SAVE } from './constants';
import {
  makeSelectCodeSnippet,
  makeSelectType,
  makeSelectTitle,
} from './selectors';

export default function* codeSnippetAddFormSaga() {
  yield takeLatest(SAVE, save);
}

export function* save() {
  const codeSnippet = yield select(makeSelectCodeSnippet());
  const type = yield select(makeSelectType());
  const title = yield select(makeSelectTitle());
  const items = yield select(makeAllItems());

  const requestURL = `https://ws-code-snippet.herokuapp.com/v1/codeSnippet`;

  const item = JSON.stringify({
    title,
    content: codeSnippet,
    type,
  });

  try {
    const result = yield call(request, requestURL, {
      method: 'POST',
      body: item,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    items.push(result);
    yield put(saveSuccess(1));
    yield put(loadAllItemsSuccess(items));
  } catch (err) {
    yield put(saveSuccess(2));
  }
}

import { call, put, takeLatest, select } from 'redux-saga/effects';
import request from 'utils/request';
import { selectCodeSnippet } from 'containers/CodeSnippetLanguagesDescriptionItem/actions';
import { SELECTION } from './constants';
import { makeSelectLanguage } from './selectors';
import { saveItems } from './actions';

export default function* codeSnippetLanguageItemSaga() {
  yield takeLatest(SELECTION, findByLanguage);
}

export function* findByLanguage() {
  const language = yield select(makeSelectLanguage());
  const requestURL = `http://ws-code-snippet.herokuapp.com/v1/codeSnippet/language/${language}`;

  try {
    const items = yield call(request, requestURL);
    yield put(saveItems(items));
    yield put(selectCodeSnippet(null));
  } catch (err) {
    // yield put(loadAllItemsSuccess([], 2));
  }
}

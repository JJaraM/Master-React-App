import { put, takeLatest, select, call } from 'redux-saga/effects';
import { makeSelectLanguages } from 'containers/CodeSnippetApp/selectors';
import { saveItems } from 'containers/CodeSnippetLanguageItem/actions';
import { loadAllItemsSuccess } from 'containers/CodeSnippetApp/actions';
import { makeSelectLanguage } from './selectors';
import { ON_SAVE } from './constants';
import { saveLanguageSuccess } from './actions';
import request from 'utils/request';

export default function* init() {
  yield takeLatest(ON_SAVE, onSave);
}

export function* onSave() {
  const requestURL = `https://ws-code-snippet.herokuapp.com/v1/codeSnippet`;
  const language = yield select(makeSelectLanguage());
  const languages = yield select(makeSelectLanguages());
  const postData = {
    type: language
  }

  const requestResult = yield call(request, requestURL, {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  languages.unshift(requestResult);
  yield put(loadAllItemsSuccess(languages.slice(), 1));
  yield put(saveItems(null));
  yield put(saveLanguageSuccess());
}

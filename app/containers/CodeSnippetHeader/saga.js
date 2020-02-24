import { put, takeLatest, select, call } from 'redux-saga/effects';
import { makeSelectLanguage, makeSelectCodeSnippets } from 'containers/CodeSnippetLanguageItem/selectors';
import { makeTitle } from './selectors';

import { saveItems } from 'containers/CodeSnippetLanguageItem/actions';
import { SAVE } from './constants';
import { show } from './actions';
import request from 'utils/request';

export default function* init() {
  yield takeLatest(SAVE, onSave);
}

export function* onSave() {
 
  let requestURL = `https://ws-code-snippet.herokuapp.com/v1/codeSnippet`;
  const selectedLanguage = yield select(makeSelectLanguage());
  const codeSnippets = yield select(makeSelectCodeSnippets());
  const title = yield select(makeTitle());

  let method = 'POST';
  if (codeSnippets.length === 1 && codeSnippets[0].title === null) {
    method = 'PUT';
    requestURL = `https://ws-code-snippet.herokuapp.com/v1/codeSnippet/${codeSnippets[0].id}`;
  }

  const postData = {
    id: 90,
    title: title,
    type: selectedLanguage,
  }

  const requestResult = yield call(request, requestURL, {
    method: method,
    body: JSON.stringify(postData),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  codeSnippets.unshift(requestResult);
  yield put(saveItems(codeSnippets.slice()));
  yield put(show(false));

}

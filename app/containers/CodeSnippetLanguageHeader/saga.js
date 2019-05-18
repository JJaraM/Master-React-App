import { call, put, takeLatest, select } from 'redux-saga/effects';
import { ON_SAVE } from './constants';
import { makeSelectLanguage } from './selectors';
import { makeSelectLanguages } from 'containers/CodeSnippetApp/selectors';
import { saveItems } from 'containers/CodeSnippetLanguageItem/actions';
import { loadAllItemsSuccess } from 'containers/CodeSnippetApp/actions';
import { saveLanguageSuccess } from './actions';

export default function* init() {
  yield takeLatest(ON_SAVE, onSave);
}

export function* onSave() {
  const language = yield select(makeSelectLanguage());
  const languages = yield select(makeSelectLanguages());
  languages.push({type: language});

  yield put(loadAllItemsSuccess(languages.slice(), 1))
  yield put(saveItems(null));
  yield put(saveLanguageSuccess());
}

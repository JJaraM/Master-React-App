import { call, put, takeLatest, select } from 'redux-saga/effects';
import { FETCH } from './constants';
import { fetchDone } from './actions';
import request from 'utils/request';
import { selectedWebService } from 'containers/ItemWebService/selectors';

export default function* init() {
  yield takeLatest(FETCH, executeCall)
}

export function* executeCall() {
  const item = yield select(selectedWebService());
  let items = yield call(request, item.url);
  yield put(fetchDone(items));
}
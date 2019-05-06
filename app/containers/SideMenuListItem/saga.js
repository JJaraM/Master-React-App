import { put, select, takeLatest } from 'redux-saga/effects';
import { EXPAND, EXPAND_SUCCESS } from './constants';
import { collapseSuccess } from './actions';
import { makeSelectCollapse, makeSelectIdToRender } from './selectors';

export default function* sideMenuListItem() {
  yield takeLatest(EXPAND, collapse);
}

export function* collapse() {
  const collapse = yield select(makeSelectCollapse());
  yield put(collapseSuccess(!collapse));
}

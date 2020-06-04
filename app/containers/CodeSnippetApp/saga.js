import { call, put, takeLatest, take } from 'redux-saga/effects';
import {takeEvery, eventChannel} from 'redux-saga';
import request from 'utils/request';
import { LOAD_LANGUAGES } from './constants';
import { loadAllItemsSuccess } from './actions';

//https://github.com/redux-saga/redux-saga/issues/868
export default function* init() {
  /*try {
    const eventSrc = new EventSource("http://localhost:5000/event/languages/all");
    const chan = yield call(subSSE, eventSrc);
  
    while (true) {
      const msg = yield take(chan);
      if (msg.data != undefined) {
        yield put(loadAllItemsSuccess(JSON.parse(msg.data), 1));
      }
    }
  } catch (err) {
    yield put(loadAllItemsSuccess([], 2));
  }*/
  const requestURL = `https://ws-code-snippet.herokuapp.com/v1/codeSnippet/allLanguages`;
  try {
    const items = yield call(request, requestURL);
    yield put(loadAllItemsSuccess(items, 1));
  } catch (err) {
    yield put(loadAllItemsSuccess(null, 2));
  }
 
}

export function subSSE(eventSrc) {
  const subs = emitter => {
     eventSrc.onmessage = (msg) => {
       emitter(msg);
     };
     eventSrc.onerror = () => {
       emitter("");
       console.log("on Error");
     };
    return () => {
      eventSrc.close();
    }
  };
  return eventChannel(subs);
}
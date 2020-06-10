import { put, select, takeLatest } from 'redux-saga/effects';
import { FETCH } from './constants';
import { fetchDone } from './actions';

export default function* init() {
  yield takeLatest(FETCH, onFetch);
}

export function* onFetch() {
  const items = [
    {
      title: "Tag Microservice",
      url: "http://blog-microservice-tag.herokuapp.com/v2/api-docs",
      address: "http://blog-microservice-tag.herokuapp.com"
    },
    {
      title: "Pet Microservice",
      url: "https://petstore.swagger.io/v2/swagger.json",
      address: "https://petstore.swagger.io"
    }
  ];
  yield put(fetchDone(items));
}

